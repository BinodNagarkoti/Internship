from django.db import models

class exp(models.Model):
    office=models.CharField(max_length=50)
    designation=models.CharField(max_length=50)
    date =models.DateTimeField(auto_now=True)    

