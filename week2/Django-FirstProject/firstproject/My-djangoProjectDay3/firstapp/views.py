from django.shortcuts import render
from django.http import HttpResponse, Http404
from . models import Question

def index(request):
   latest_question_list = Question.objects.order_by('-pub_date')[:5]
   context = {'latest_question_list':latest_question_list}
   return render(request,'firstapp/index.html',context) 


def detail(request,question_id):
    try:
        question = Question.objects.get(pk=question_id) 
    except Question.DoesNotExist:
        raise Http404 ('Question doesnt exits')
    return render (request, 'firstapp/details.html',{'question':question})

def resutls (request, question_id):
    response ="your are looking @ results %s"
    return HttpResponse(response %question_id)

def votes (request,question_id):
    return HttpResponse("Your are looking @ votes : %s" %question_id)
