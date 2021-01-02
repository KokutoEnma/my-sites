from rest_framework import serializers
from .models import BlogModel


class BlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogModel
        fields = (
            # 'key',
            'owner',
            'subject',
            'description',
            'created_time',
            'updated_time'
        )
