# -*- coding:utf8 -*-

import logging
import MySQLdb
import MySQLdb.cursors
import json
logger = logging.getLogger('mylogger')
class DBHelper:
    def __init__(self):
        self.conn = MySQLdb.connect('localhost', 'root', '0719', 'ThaiTravel',
                               cursorclass = MySQLdb.cursors.DictCursor,
                               charset = 'utf8mb4')
        self.cur = self.conn.cursor()

    #
    def check_word(self, word):
        sql = 'select ifset from chi_scene where scene_name = %s' % '"' + word  + '"'
        self.cur.execute(sql)
        result = self.cur.fetchall()
        if result:
            return result[0]['ifset']
        else:
            return -1


    def get_scene_list(self, scene_name, index):
        sql = 'select indices from chi_scene where scene_name = %s' % '"' + scene_name + '"'
        self.cur.execute(sql)
        result = self.cur.fetchall()
        indices = []
        for i in result[0]['indices'].split(','):
            if i:
                indices.append(int(i))
        sql = "select * from chi_scene where id in (%s)"
        start_index = (index - 1) * 10
        end_index = index * 10
        indices_list = ', '.join((map(lambda x: '%s', indices[start_index:end_index])))
        self.cur.execute(sql % indices_list, indices[start_index:end_index])
        new_result = self.cur.fetchall()
        return new_result, len(indices)

    def get_scene_content(self, scene_name):
        sql = 'select * from chi_scene where scene_name = %s' % '"' + scene_name + '"'
        self.cur.execute(sql)
        result = self.cur.fetchall()
        return result[0]

    def compute_user_level(self, line):
        user_level = int(line['user_level'])
        line.pop('user_level')
        comment_counts = int(line['comment_counts'])
        line.pop('comment_counts')
        scene_comment_counts = int(line['scene_comment_counts'])
        line.pop('scene_comment_counts')
        agree_counts = int(line['agree_counts'])
        line.pop('agree_counts')
        if user_level > 3 and comment_counts > 20 and scene_comment_counts > 10 and agree_counts >10:
            line['user_label'] = u'旅游达人'
        else:
            line['user_label'] = u'旅游小白'
        return json.dumps(line)

    def get_scene_comments(self, scene_name, num, lang):
        table = lang + "_scene"
        if lang != 'chi':
            sql = 'select %s from location_set where chi_location=%s' % (lang+'_location', '"' + scene_name + '"')
            self.cur.execute(sql)
            result = self.cur.fetchall()
            if result[0][lang+'_location'] == 'null':
                return
            else:
                scene_name = result[0][lang+'_location']
        sql = 'select indices from %s where scene_name = %s' % (table, '"' + scene_name + '"')
        self.cur.execute(sql)
        result = self.cur.fetchall()
        indices = []
        for i in result[0]['indices'].split(','):
            if i:
                indices.append(int(i))
        result_set = []
        sql = 'select user_name, head, content, title, user_level, comment_counts' \
              ', scene_comment_counts, agree_counts from %s where id = %s'
        last = len(indices) if (num + 5) > len(indices) else (num + 5)
        if num == -1:
            num = 0
            last = len(indices)
        for i in indices[num:last]:
            if i:
                self.cur.execute(sql % ( lang+"_comments",int(i)))
                result = self.cur.fetchall()
                if result:
                    result_set.append(self.compute_user_level(result[0]))
        return result_set



    def get_score(self, scene_name):
        sql = 'select score from chi_scene where scene_name = %s' % "'" + scene_name + "'"
        self.cur.execute(sql)
        results = self.cur.fetchall()
        return results[0]

    def close(self):
        self.conn.close()

# db = DBHelper()
# print db.get_score(u'皇陵')