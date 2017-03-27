# -*- coding:utf8 -*-

import logging
import MySQLdb
import MySQLdb.cursors
logger = logging.getLogger('mylogger')
class DBHelper:
    def __init__(self):
        self.conn = MySQLdb.connect('localhost', 'root', '0719', 'ThaiTravel',
                               cursorclass = MySQLdb.cursors.DictCursor,
                               charset = 'utf8mb4')
        self.cur = self.conn.cursor()

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
    def get_scene_comments(self, scene_name):
        sql = 'select indices from chi_scene where scene_name = %s' % '"' + scene_name + '"'
        self.cur.execute(sql)
        result = self.cur.fetchall()
        indices = []
        for i in result[0]['indices'].split(','):
            if i:
                indices.append(int(i))
        result_set = []
        sql = 'select user_name, head, content, title from chi_comments where id = %s'
        for i in indices:
            if i:
                self.cur.execute(sql % int(i))
                result = self.cur.fetchall()
                if result:
                    result_set.append(result[0])
        return result_set

    def close(self):
        self.conn.close()

# db = DBHelper()
# print db.check_word('曼谷')