# from django.shortcuts import render
from rest_framework.views import APIView
from frontend.models import *
from rest_framework.response import Response
from frontend.serializer import *
from django.http import HttpResponse
from django.views.generic import View
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.template import loader

import logging
import os
# Create your views here.


class SerializerView(APIView):

    serializer_class = ReactSerializer

    def get(self, request):
        detail = [{"name": detail.name, "detail": detail.detail}
                  for detail in React.objects.all()]
        return Response(detail)

    def post(self, request):

        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class FrontendAppView(View):
    """
    Serves the compiled frontend entry point (only works if you have run `yarn
    run build`).
    """

    def get(self, request):
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                    return HttpResponse(f.read())

        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                """
                    This URL is only used when you have built the production
                    version of the app. Visit http://localhost:3000/ instead, or
                    run `yarn run build` to test the production version.
                    """,
                status=501,
            )
