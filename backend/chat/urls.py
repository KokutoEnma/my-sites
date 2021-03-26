from django.urls import path
from .views import *
urlpatterns = [
    path('', getUserChatDataView.as_view())
]
