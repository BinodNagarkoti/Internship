from django.shortcuts import render
def showHome(response):
    return render(response,'index.html')