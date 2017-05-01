# -*- coding:utf8 -*-

import logging
import MySQLdb
import MySQLdb.cursors
import json
import math
logger = logging.getLogger('mylogger')
class DBHelper:
    def __init__(self):
        self.conn = MySQLdb.connect('localhost', 'root', '0719', 'ThaiTravel',
                               cursorclass = MySQLdb.cursors.DictCursor,
                               charset = 'utf8mb4')
        self.cur = self.conn.cursor()

    def get_notes_list(self, index):
        sql = 'select id,title,author,time,picture from chi_travel_notes'
        self.cur.execute(sql)
        temp_results = self.cur.fetchall()
        max_page = math.ceil(len(temp_results) / float(16))
        start_index = (index - 1) * 16
        end_index = index * 16
        for result in temp_results[start_index:end_index]:
            id = result['id']
            result['src'] = '../discover/travelnote/?id=' + str(id)
        results = {}
        results['travel_notes'] = temp_results[start_index:end_index]
        results['page_num'] = max_page
        return json.dumps(results)

    def get_note(self, id):
        sql = 'select * from chi_travel_notes where id = %s' % int(id)
        self.cur.execute(sql)
        results = self.cur.fetchall()
        if results:
            result = results[0]
            content = result['content']
            temp = content.split('||')
            new_content = []
            for t in temp:
                tt = eval(str(t))
                new_content.append(tt)
            # new_content = json.dumps(new_content)
            result['content'] = new_content
            return json.dumps(result)
        return None

    def close(self):
        self.conn.close()
