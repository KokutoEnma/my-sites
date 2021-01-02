from django.urls import path
from .views import BlogList, NewBlog


urlpatterns = [
    path('bloglist/', BlogList.as_view()),
    path('newblog/', NewBlog.as_view())
]
