from django.shortcuts import render
from django.http import HttpResponse
import logging
import dbhelper
logger = logging.getLogger('mylogger')
db = dbhelper.DBHelper()
# Create your views here.


def home(request):
    logger.info('home')
    return render(request, 'Search/homePage.html')


def search(request):
    if request.method == 'POST':
        search_word = request.POST['search_word']
        status, results = db.check_word(search_word)
        if status:
            pass
        else:
            pass
        result_dict = {'title': search_word}
        logger.info('post')
        return render(request, 'Search/concretenessCh.html', {'result_dict': result_dict})
    else:
        logger.info('get')
        return HttpResponse('hello')

