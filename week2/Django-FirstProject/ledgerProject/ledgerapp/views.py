from django.shortcuts import render

def ledger(request):
    return render(request,'ledger.html')
def data(request):
    dr=(request.GET['dr1'])
	return render(request, 'data.html',{'DebiAmount':float(dr)} )
