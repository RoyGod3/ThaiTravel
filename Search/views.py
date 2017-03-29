# -*- coding:utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
import logging
import dbhelper
import json
import re
import jieba.analyse
import thaisegment
logger = logging.getLogger('mylogger')

# Create your views here.


def home(request):
    logger.info('home')
    return render(request, 'Search/homePage.html')

def get_tag(scene_name):
    db = dbhelper.DBHelper()
    all_tag = []
    comments = db.get_scene_comments(scene_name, -1, 'chi')['comments']
    all_tag += get_chi_tag(comments)
    comments = db.get_scene_comments(scene_name, -1, 'thai')['comments']
    all_tag += thaisegment.extract_tags(comments)
    return all_tag

def check_search_word(search_word):
    pattern = '[^\u4e00-\u9fa5]'
    match = re.search(pattern, search_word)
    if match:
        return 'chi'
    pattern = '^[a-zA-Z]+$'
    match = re.search(pattern, search_word)
    if match:
        return 'eng'
    pattern = '^\u0E00-\u0E7F]'
    match = re.search(pattern, search_word)
    if match:
        return 'thai'
    return 'chi'


def get_chi_tag(comments):
    dict = {}
    for comment in comments:
        comment = json.loads(comment)
        content = comment['content']
        key_words = jieba.analyse.extract_tags(content, topK=3, withWeight=False,
                                               allowPOS=['a', 'nv', 'nr'], withFlag=True)
        for k in key_words:
            if dict.has_key(k.word):
                dict[k.word] += 1
            else:
                dict[k.word] = 1
    result = sorted(dict.iteritems(), key=lambda d: d[1], reverse=True)[:3]
    result = [term[0] for term in result]
    return result



def get_scene_comments(request):
    db = dbhelper.DBHelper()
    if request.method == 'GET':
        scene_name = request.GET["scene"]
        offset = request.REQUEST.get('offset', '0')
        lang = request.REQUEST.get('lang', 'chi')
    comments = db.get_scene_comments(scene_name, int(offset), lang)
    return HttpResponse(json.dumps(comments), content_type='application/json')

def search(request):
    db = dbhelper.DBHelper()
    search_word = None
    index = 1
    if request.method == 'POST':
        search_word = request.POST['search_word']
        return HttpResponseRedirect("?scene=" + search_word + '&page=' + str(index))
    else:
        search_word = request.GET["scene"]
        index = request.REQUEST.get('page', '1')
    lang = check_search_word(search_word)
    status, search_word = db.check_word(search_word, lang)
    if status == 1:
        results, max_page = db.get_scene_list(search_word, int(index))
        pictureContent = []
        for result in results:
            content ={}
            content['picSrc'] = None if result['picture'] == None else result['picture'].split(';')[0]
            content['titleSrc'] = '../search/search?scene=' + result['scene_name']
            content['titleText'] = result['scene_name']
            scores = db.get_score(result['scene_name'])
            logger.info(scores['score'])
            scores = scores['score'].split(',')
            content['ch'] = scores[0] if scores[0] else 0
            content['en'] = scores[1] if scores[1] else 0
            content['th'] = scores[2] if scores[2] else 0
            pictureContent.append(json.dumps(content))
        return render(request, 'Search/sceneList.html', {'pictureContent': json.dumps(pictureContent),
                                                          'maxPage': max_page})
    elif status == 0:
        result = db.get_scene_content(search_word)
        result_dict = {}
        # logger.info(result)
        if result['picture'] != None:
            pictures = result['picture'].split(';')
            maxPic = 5 if len(pictures) > 5 else len(pictures)
            result_dict['BigPic'] = pictures[0]
            imgGroup = []
            for i in range(1, maxPic):
                imgGroup.append(pictures[i])
        result_dict["imgGroup"] = imgGroup
        scores = db.get_score(result['scene_name'])
        scores = scores["score"].split(',')
        result_dict['chEva'] = scores[0] if scores[0] else 0
        result_dict['enEva'] = scores[1] if scores[1] else 0
        result_dict['thEva'] = scores[2] if scores[2] else 0
        num = 0
        all_score = 0
        for score in scores:
            all_score += int(score)
            if int(score):
                num += 1
        result_dict['totalEva'] = all_score / num
        result_dict['mainBody'] = result['introduction']
        result_dict['title'] = result['scene_name']
        all_tag = get_tag(result['scene_name'])
        tagGroup = []
        for tag in all_tag:
            tagGroup.append(tag)

        # tagGroup = ['美食', '好玩', '天堂']
        result_dict['tagGroup'] = tagGroup
        # comments = db.get_scene_comments(result['scene_name'], 0)
        return render(request, 'Search/detailCh.html', {'result_dict': json.dumps(result_dict)})
    else:
        return HttpResponse('404 NOT FOUND!!')
    db.close()


# db = dbhelper.DBHelper()
# comments = db.get_scene_comments('皇陵', -1)
# get_tag(comments)
