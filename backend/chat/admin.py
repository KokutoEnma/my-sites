from django.contrib import admin
from .models import *

admin.site.register(Message)
admin.site.register(MessageGroup)
admin.site.register(ChatMember)
