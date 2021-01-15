from django.shortcuts import render
from .models import StatusModel
from rest_framework.response import Response
from rest_framework.views import APIView
import json
# Create your views here.


class GetMyStatus(APIView):
    def get(self, request):

        try:
            status = vars(StatusModel.objects.all()[0])
        except StatusModel.DoesNotExist:
            status = StatusModel(
                status=False
            )
            status.save()
            status = vars(status)
        return Response({
            'error': False,
            'status': status['status'],
            'msg': None
        })


class SetMyStatus(APIView):
    def get(self, request):
        if request.user.is_anonymous or (not request.user.username == 'yu'):
            return Response({
                'error': True,
                'status': False,
                'msg': 'not authorized'
            })
        res = request.GET.get('status', False)
        res = True if res == 'true' else False
        obj = StatusModel.objects.all()[0]
        obj.status = res
        obj.save()
        return Response({
            'error': False,
            'status': res,
            'msg': None
        })
