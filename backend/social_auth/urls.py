from django.urls import path
from .views import CurrentUserProfile


urlpatterns = [
    path('profile/', CurrentUserProfile.as_view())
]
