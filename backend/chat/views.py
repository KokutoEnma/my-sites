from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from social_auth.models import ProfileModel
from django.contrib.auth.models import User


class getUserChatDataView(APIView):
    def get(self, request):
        package = {'lobby': {
            'id': 1,
            'name': 'lobby',
            'chatList': [],
        }}
        for item in Message.objects.filter(group=1):
            # item = vars(item)
            package['lobby']['chatList'].append({
                'display_name': item.user.display_name,
                'avatar': item.user.avatar_url,
                'message': item.message,
                'time': item.created_time,
            })
        if request.user.is_anonymous:
            return Response(package)
        else:
            for chats in ChatMember.objects.filter(user=ProfileModel.objects.get(user=request.user)):
                message_group = chats.group
                package[message_group.id] = {
                    'name': message_group.name,
                    'id': message_group.id,
                    'chatList': [],
                    'users': set()
                }
                for item in Message.objects.filter(group=message_group):
                    package[message_group.id]['chatList'].append({
                        'display_name': item.user.display_name,
                        'avatar': item.user.avatar_url,
                        'message': item.message,
                        'time': item.created_time,
                    })

                for member in ChatMember.objects.filter(group=message_group):
                    package[message_group.id]['users'].add(
                        member.user.display_name)

            package[message_group.id]['users'] = list(
                package[message_group.id]['users'])
            return Response(package)
