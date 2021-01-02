from rest_framework import serializers
from .models import ProfileModel


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProfileModel
        fields = ('user',
                  'avatar_url',
                  'display_name',
                  'avatar'
                  )
