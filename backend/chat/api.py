from .models import Message
from rest_framework import viewsets, permissions
from .serializer import MessageSerializer


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MessageSerializer
