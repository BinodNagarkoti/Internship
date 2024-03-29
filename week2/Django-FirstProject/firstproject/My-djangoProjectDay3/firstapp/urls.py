# from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [  
    path('', views.index, name='index'),
    path('<int:question_id>/', views.detail, name='details'),
    path('<int:question_id>/results', views.resutls, name='results'),
    path('<int:question_id>/vote', views.votes, name='vote'),
]