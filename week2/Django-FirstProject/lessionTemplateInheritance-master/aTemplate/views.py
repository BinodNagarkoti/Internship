from django.shortcuts import render

# Create your views here.
def aTemplate(request):
    return render(request,'atemplate.html')
