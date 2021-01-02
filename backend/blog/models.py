from django.db import models
from django.contrib.auth import get_user_model
import uuid
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.

User = get_user_model()


class BlogModel(models.Model):
    unique_id = models.UUIDField(
        default=uuid.uuid4, editable=False, unique=True)
    owner = models.ForeignKey(
        User,
        verbose_name='user',
        related_name='blog',
        on_delete=models.CASCADE
    )
    subject = models.CharField(max_length=256, blank=True, null=True)
    description = RichTextUploadingField()
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.owner.username+": "+self.subject

    class Meta():
        db_table = 'blog'
