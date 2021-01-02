from django.conf.urls import url
from django.urls import path, include
from .views import CurrentUserProfile


urlpatterns = [
    path('profile/', CurrentUserProfile.as_view())
]
