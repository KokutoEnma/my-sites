from rest_framework.views import APIView
from .models import BlogModel
from rest_framework.response import Response
import json
from django.contrib.auth import get_user_model

User = get_user_model()


class BlogList(APIView):
    def get(self, request):

        bloglist = []

        for item in list(BlogModel.objects.all()):
            description_lines = [
                line for line in item.description.splitlines()]
            # print(description_lines)
            bloglist.append({
                'unique_id': item.unique_id,
                'subject': item.subject,
                'owner': item.owner.username,
                'created_time': item.created_time,
                'updated_time': item.updated_time,
                'description': description_lines
            })
        return Response({
            "blogList": bloglist
        })


class NewBlog(APIView):
    def post(self, request):
        res = json.loads(request.body)['blog']
        user = User.objects.get(username=res['username'])
        blog = BlogModel(
            owner=user,
            subject=res['subject'],
            description=res['description']
        )
        blog.save()
        return Response({
            "error": False,
        })
