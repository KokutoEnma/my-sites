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
        blog = vars(blog)
        description_lines = [
            line for line in blog['description'].splitlines()]
        return Response({
            "error": False,
            "blog": {
                'unique_id': blog['unique_id'],
                'subject': blog['subject'],
                'owner': blog['owner_id'],
                'created_time': blog['created_time'],
                'updated_time': blog['updated_time'],
                'description': description_lines
            }
        })


class GetBlog(APIView):
    def post(self, request):
        key = json.loads(request.body)['key']
        try:
            blog = vars(BlogModel.objects.get(unique_id=key))
            description_lines = [
                line for line in blog['description'].splitlines()]
            return Response({
                'error': False,
                'blog': {
                    'unique_id': blog['unique_id'],
                    'subject': blog['subject'],
                    'owner': blog['owner_id'],
                    'created_time': blog['created_time'],
                    'updated_time': blog['updated_time'],
                    'description': description_lines
                }
            })
        except BlogModel.DoesNotExist:
            return Response({
                'error': True,
                'message': 'Blog Not Found'
            })
