from django.urls import path
from .views import BlogList, NewBlog, GetBlog


urlpatterns = [
    path('bloglist/', BlogList.as_view()),
    path('newblog/', NewBlog.as_view()),
    path('getblog/', GetBlog.as_view())
]
