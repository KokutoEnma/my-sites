from .models import ProfileModel
from rest_framework import viewsets, permissions
from .serializer import BlogSerializer


class BlogViewSet(viewsets.ModelViewSet):
    queryset = ProfileModel.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BlogSerializer
