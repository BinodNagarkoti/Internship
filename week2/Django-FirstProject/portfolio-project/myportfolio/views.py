from django.shortcuts import render
from .models import exp
def show(request):
    exps=exp.objects.all()
    args={'exps':exps}
    return render(request,'eportfolio.html',args)

