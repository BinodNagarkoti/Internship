from django.shortcuts import render

# Create your views here.
def openme(request):
    return render(request, 'eportfolio.html')
