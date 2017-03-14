# -*- coding: utf-8 -*-
import os
import re


def readTextFiles(rootDir):
    fileDict = {}
    for dirName, subdirList, fileList in os.walk(rootDir):
        curDir = os.path.join(rootDir, dirName)
        for file in fileList:
            if file.endswith(".txt"):
                curFile = os.path.join(curDir, file)
                curKey = curFile.split("/")
                curKey = curKey[-2] + "/" + curKey[-1]
                fp = open(curFile, "r")
                for line in fp.readlines():
                    line = line.strip()
                    cleanText(line, curKey, fileDict)
                fp.close()
    return fileDict
    # for key, val in fileDict.iteritems():
    #     print key, val

def word2single(t):
    t1 = t.split('/')
    t1 = re.subn('\[|\]', '', t1[0])[0]
    t1 = t1.decode('utf8')
    return t1

def cleanText(line, curKey, fileDict):
    line = line.strip()
    line = line.split(' ')
    for t in line:
        word = word2single(t)
        if fileDict.has_key(word):
            fileDict[word].append(curKey)
        else:
            fileDict[word] = []
            fileDict[word].append(curKey)


