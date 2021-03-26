from django.db import models
from django.contrib.postgres.fields import ArrayField
from social_auth.models import ProfileModel


class MessageGroup(models.Model):
    name = models.CharField(max_length=30, null=True, default=None, blank=True)

    def __str__(self):
        return str(self.id)+':'+(self.name if self.name else 'undefined')

    def save(self, *args, **kwargs):
        if not self.name:
            self.name = None
        super(MessageGroup, self).save(*args, **kwargs)

    class Meta():
        db_table = 'chat_message_group'


message_group = MessageGroup()
profile = ProfileModel()


class ChatMember(models.Model):
    user = models.ForeignKey(
        profile,
        verbose_name='user',
        related_name='member',
        on_delete=models.CASCADE
    )
    group = models.ForeignKey(
        message_group,
        verbose_name='group',
        related_name='member',
        on_delete=models.CASCADE
    )

    class Meta():
        db_table = 'chat_message_member'


class Message(models.Model):
    user = models.ForeignKey(
        profile,
        verbose_name='user',
        related_name='message',
        on_delete=models.CASCADE
    )
    message = models.CharField(max_length=200)
    group = models.ForeignKey(
        message_group,
        verbose_name='group',
        related_name='message',
        on_delete=models.CASCADE
    )
    created_time = models.DateTimeField('Created Time', auto_now_add=True)

    def __str__(self):
        return '{}:{}'.format(self.user, self.message)

    class Meta():
        db_table = 'chat_message_message'
