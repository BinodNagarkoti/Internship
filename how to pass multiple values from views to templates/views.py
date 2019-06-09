from django.shortcuts import render
import csv
from django. http import HttpResponse
serviceData = []
# with open('./convertcsv.csv','r') as serviceData_file:
#     reader = csv.DictReader(serviceData_file)
#     for line in reader:
#         serviceData.append(dict(line))

myDict = {1:'one',2:'Two'}
def test(request):

    return render(request,'office.html',{'abd': (myDict)})



