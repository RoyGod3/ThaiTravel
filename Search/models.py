from django.db import models

# Create your models here.

class BaseSearch(models.Model):
    def __init__(self, name):
        self.name = name

    def buildInvertedIndex(self, files):
        pass


class ChineseSearch(BaseSearch):
    def __init__(self):
        BaseSearch.__init__(self, 'chi')

    def buildInvertedIndex(self, files):
        BaseSearch.buildInvertedIndex()

class ThaiSearch(BaseSearch):
    def __init__(self):
        BaseSearch.__init__(self, 'thai')

    def buildInvertedIndex(self, files):
        pass

class EnglishSearch(BaseSearch):
    def __init__(self):
        BaseSearch.__init__(self, 'eng')

    def buildInvertedIndex(self, files):
        pass
