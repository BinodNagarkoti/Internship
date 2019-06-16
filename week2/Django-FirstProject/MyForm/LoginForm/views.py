from django.shortcuts import render

def loginform(request):
    return render(request,'loginForm.html')
