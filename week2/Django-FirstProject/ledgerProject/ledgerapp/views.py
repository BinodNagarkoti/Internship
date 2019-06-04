from django.shortcuts import render

def ledger(request):
    return render(request,'ledger.html')
def data(request):
	dr=''
	cr=''
	for i in range (1,5):
		if int(request.GET['dr'+str(i)])!=0: 
			dr=dr+','+(request.GET['dr'+str(i)])
		if int(request.GET['cr'+str(i)])!=0:
			cr=cr+','+(request.GET['cr'+str(i)])	
	return render(request, 'data.html',{'DebitAmount':(dr),'CreditAmount':(cr) })
