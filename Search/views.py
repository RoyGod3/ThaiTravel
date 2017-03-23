from django.shortcuts import render
from django.http import HttpResponse
import logging
logger = logging.getLogger('mylogger')
# Create your views here.


def home(request):
    logger.info('home')
    return render(request, 'Search/homePage.html')


def search(request):
    if request.method == 'POST':
        search_word = request.POST['search_word']
        logger.info(search_word)
        logger.info('post')
        return render(request, 'Search/concretenessCh.html')
    else:
        logger.info('get')
        return HttpResponse('hello')

