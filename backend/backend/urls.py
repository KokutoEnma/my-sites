from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from frontend.views import FrontendAppView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/app/chat', include('chat.urls')),
    url(r'^', FrontendAppView.as_view()),
]
