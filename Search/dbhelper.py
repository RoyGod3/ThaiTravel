# -*- coding:utf8 -*-
import MySQLdb
import MySQLdb.cursors
class DBHelper:
    def __init__(self):
        self.conn = MySQLdb.connect('localhost', 'root', '0719', 'ThaiTravel', cursorclass = MySQLdb.cursors.DictCursor)
        self.conn.set_character_set('utf8mb4')
        self.cur = self.conn.cursor()

    def check_word(self, word):
        sql = 'select * from chi_scene where scene_name = %s' % '"' + word  + '"'
        self.cur.execute(sql)
        result = self.cur.fetchall()
        result = result[0]
        if result['ifset']:
            indices = set()
            for i in result['indices'].split(','):
                if i:
                    indices.add(i)
            indices_list = ','.join(['%s'] * len(indices))
            sql = 'select * from chi_scene where id in (%s)' % indices_list
            self.cur.execute(sql, indices)
            new_result = self.cur.fetchall()
            return result['ifset'], new_result
        else:
            return (result['ifset'], result)

db = DBHelper()
print db.check_word('曼谷')