from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from frontend.views import FrontendAppView
from rest_framework.response import Response
import json
from rest_framework.views import APIView
from django.conf import settings
from django.conf.urls.static import static


class test1(APIView):
    def get(self, request):
        print('hi')
        print(request.user)
        return Response({'username': 'hi'})


class test2(APIView):
    def post(self, request):
        res = json.loads(request.body)['url']
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        self.request.session['url'] = res
        self.request.session.modified = True
        return Response({'hi': self.request.session['url']})

    def get(self, request):
        views = request.session.get('views', 1)
        request.session['views'] = views + 1
        return Response({'hi': views})


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/app/', include('chat.urls')),
    path('api/auth/', include('allauth.urls')),
    path('api/auth/', include('social_auth.urls')),
    path('api/ckeditor/', include('ckeditor_uploader.urls')),
    path('api/blog/', include('blog.urls'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    url(r'^', FrontendAppView.as_view()),
]
