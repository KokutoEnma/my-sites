import json
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import *
from channels.db import database_sync_to_async


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        pass
#         self.room_name = self.scope['url_route']['kwargs']['room_name']
#         self.room_group_name = 'chat_%s' % self.room_name

#         res = await self.fetch_message()
#         assert not (res == False), 'Fetch Message Error'

#         # Join room group
#         await self.channel_layer.group_add(
#             self.room_group_name,
#             self.channel_name
#         )

#         await self.accept()
#         await self.send(text_data=json.dumps({
#             'message': res
#         }))

    async def disconnect(self, close_code):
        pass
#         # Leave room group
#         await self.channel_layer.group_discard(
#             self.room_group_name,
#             self.channel_name
#         )

#     # Receive message from WebSocket
    async def receive(self, text_data):
        pass
#         text_data_json = json.loads(text_data)
#         message = text_data_json['message']

#         # Send message to room group
#         await self.channel_layer.group_send(
#             self.room_group_name,
#             {
#                 'type': 'chat_message',
#                 'message': message
#             }
#         )

#     # Receive message from room group
    async def chat_message(self, event):
        pass
#         message = event['message']
#         res = await self.save_message(message)
#         assert res == True, 'Save Message Error'
#         # Send message to WebSocket
#         await self.send(text_data=json.dumps({
#             'message': message
#         }))

#     @ database_sync_to_async
#     def save_message(self, item):
#         try:
#             message = Message.objects.create(
#                 username=item['username'],
#                 message=item['message'])
#             message.save()
#             return True
#         except:
#             return False

#     @ database_sync_to_async
#     def fetch_message(self):
#         try:
#             items = []
#             for item in list(Message.objects.all()):
#                 item = vars(item)
#                 items.append(
#                     {'username': item['username'], 'message': item['message']}
#                 )
#             return items
#         except:
#             return False
