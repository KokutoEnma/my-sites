from django.apps import AppConfig
from .models import StatusModel
from rest_framework import viewsets, permissions
from rest_framework import serializers
from .models import *


class StatusSerializer(serializers.ModelSerializer):

    class Meta:
        model = StatusModel
        fields = ('id',
                  'status'
                  )


class StatusViewSet(viewsets.ModelViewSet):
    queryset = StatusModel.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = StatusSerializer


class SocialAuthConfig(AppConfig):
    name = 'social_auth'
