# -*- coding:utf-8 -*-

import httplib
import md5
import urllib
import random
import json

appid = '20161119000032190'
secretKey = 'DZHf9Aq9ggWqHaYT7e_w'

httpClient = None
myurl = '/api/trans/vip/translate'
fromLang = 'auto'
toLang = 'zh'
salt = random.randint(32768, 65536)


def translate(word):
    sign = appid + word + str(salt) + secretKey
    m1 = md5.new()
    m1.update(sign)
    sign = m1.hexdigest()
    url = myurl + '?appid=' + appid + '&q=' + urllib.quote(
        word) + '&from=' + fromLang + '&to=' + toLang + '&salt=' + str(
        salt) + '&sign=' + sign
    try:
        httpClient = httplib.HTTPConnection('api.fanyi.baidu.com')
        httpClient.request('GET', url)

        # response是HTTPResponse对象
        response = httpClient.getresponse()
        trans_result = json.loads(response.read())['trans_result'][0]
        dst = trans_result['dst']
        return dst
    except Exception, e:
        print e
    finally:
        if httpClient:
            httpClient.close()

translate('apple')