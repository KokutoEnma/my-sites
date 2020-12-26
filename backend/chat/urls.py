from rest_framework import routers
from .api import MessageViewSet

router = routers.DefaultRouter()
router.register('/lobby', MessageViewSet, 'chat')

urlpatterns = router.urls
