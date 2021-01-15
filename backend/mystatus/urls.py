from django.urls import path
from .views import *


urlpatterns = [
    path('get/', GetMyStatus.as_view()),
    path('set/', SetMyStatus.as_view()),
]
