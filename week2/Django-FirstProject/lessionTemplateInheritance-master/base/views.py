from django.shortcuts import render

# Create your views here.
def radio(request):
    return render(request, 'radio.html')
def showData(request):
    values=request.GET['abc']
    value2=request.GET['efg']
    value3=request.GET['hij']
    if values =='a':
        return render(request, 'atemplate.html',{'values1':(values),'values2':(value2),'values3':(value3)})
    elif values =='b':
        return render(request, 'btemplate.html',{'values1':(values),'values2':(value2),'values3':(value3)})   
    else:
        return render(request, 'ctemplate.html',{'values1':(values),'values2':(value2),'values3':(value3)})
    			
	


