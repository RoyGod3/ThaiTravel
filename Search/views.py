# -*- coding:utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
import logging
import dbhelper
import json
logger = logging.getLogger('mylogger')

# Create your views here.


def home(request):
    logger.info('home')
    return render(request, 'Search/homePage.html')


def search(request):
    db = dbhelper.DBHelper()
    search_word = None
    index = 1
    if request.method == 'POST':
        search_word = request.POST['search_word']
        return HttpResponseRedirect("?scene=" + search_word)
    else:
        search_word = request.GET["scene"]
        index = request.REQUEST.get('page', '1')
    status = db.check_word(search_word)
    if status == 1:
        results, max_page = db.get_scene_list(search_word, int(index))
        pictureContent = []
        for result in results:
            content ={}
            content['picSrc'] = None if result['picture'] == None else result['picture'].split(';')[0]
            content['titleSrc'] = '../search/search/?scene=' + result['scene_name'] + "&page=1"
            content['titleText'] = result['scene_name']
            content['ch'] = 5
            content['en'] = 5
            content['th'] = 5
            pictureContent.append(json.dumps(content))
        return render(request, 'Search/sceneList.html', {'pictureContent': json.dumps(pictureContent),
                                                          'maxPage': max_page})
    elif status == 0:
        result = db.get_scene_content(search_word)
        result_dict = {}
        logger.info(result)
        if result['picture'] != None:
            pictures = result['picture'].split(';')
            maxPic = 5 if len(pictures) > 5 else len(pictures)
            result_dict['BigPic'] = pictures[0]
            for i in range(1, maxPic):
                result_dict['Simg' + str(i)] = pictures[i]
        result_dict['totalEva'] = 5
        result_dict['chEva'] = 5
        result_dict['enEva'] = 5
        result_dict['thEva'] = 5
        result_dict['mainBody'] = result['introduction']
        result_dict['title'] = result['scene_name']
        result_dict['tag1'] = '美食'
        result_dict['tag2'] = '好玩'
        result_dict['tag3'] = '天堂'
        # result_dict['comments'] = db.get_scene_comments(result['scene_name'])
        return render(request, 'Search/detailCh.html', {'result_dict': json.dumps(result_dict)})
    else:
        return HttpResponse('404 NOT FOUND!!')
    db.close()

