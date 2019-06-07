from django.shortcuts import render

def registerform(request):
    return render(request, 'registerForm.html')
