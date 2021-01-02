from rest_framework.views import APIView
from .models import ProfileModel
from rest_framework.response import Response


class CurrentUserProfile(APIView):
    def get(self, request):
        if request.user.is_anonymous:
            return Response({'online': False, 'user': {}})

        else:
            try:
                profile = ProfileModel.objects.get(user=request.user.id)
            except ProfileModel.DoesNotExist:
                return Response({'online': False, 'user': {}})

            display_name = profile.display_name
            avatar_url = profile.avatar_url
            return Response({'online': True, 'user': {
                'display_name': display_name,
                'avatar_url': avatar_url,
                'username': request.user.username
            }})
