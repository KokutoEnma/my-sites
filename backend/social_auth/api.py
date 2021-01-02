from .models import ProfileModel
from rest_framework import viewsets, permissions
from .serializer import ProfileSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = ProfileModel.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProfileSerializer
