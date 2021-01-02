from rest_framework import routers
from .api import MessageViewSet

router = routers.DefaultRouter()
router.register('chat/lobby', MessageViewSet, 'chat')

urlpatterns = router.urls
