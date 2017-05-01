from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
import dbhelper
import logging
logger = logging.getLogger('mylogger')
# Create your views here.
def get_travel_note_list(request):
    db = None
    try:
        db = dbhelper.DBHelper()
        index = request.GET.get('page',default=1)
        result = db.get_notes_list(int(index))
        return HttpResponse(result)
    except Exception as e:
        logger.error(e.message)
    finally:
        db.close()

def to_travel_note(request):
    if request.method == 'GET':
        return render(request, 'Discover/NoteDetail.html')
    else:
        return HttpResponse('404 NOT FOUND!!')
def get_travel_note(request):
    db = dbhelper.DBHelper()
    # try:
    id = request.GET.get('id')
    if not id:
        logger.info(id)
        return HttpResponse('404 NOT FOUND!!')
    else:
        result = db.get_note(id)
        if result:
            return HttpResponse(result)
        else:
            return HttpResponse('404 NOT FOUND!!')
    # except Exception as e:
    #     logger.error(e.message)
    #     return HttpResponse('404 NOT FOUND!!')
    # finally:
    #     db.close()