from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from frontend.views import *
urlpatterns = [
    path('admin/', admin.site.urls),
    path('wel/', SerializerView.as_view(), name="something"),
    url(r'^', FrontendAppView.as_view()),
]
