from django.shortcuts import render

# Create your views here.
def base(request):
    return render(request, 'base.html')
def submit(request):
	value=request.GET['abc']
    value2=request.GET['efg']
    value3=request.GET['hij']
    if value ==='a':
        return render(request, 'atemplate.html',{'values1':(value),'value2':(value2),'value3':(value3)})
    elif value ==='b':
        return render(request, 'btemplate.html',{'values1':(value),'value2':(value2),'value3':(value3)})   
    else:
        return render(request, 'ctemplate.html',{'values1':(value),'value2':(value2),'value3':(value3)})
    			
	


