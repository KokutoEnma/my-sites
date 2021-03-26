from django.db import models
from django.contrib.auth import get_user_model
from allauth.account.signals import user_signed_up, user_logged_in
from django.dispatch import receiver
from django.core.files import File
import requests
from urllib.parse import urlparse
from django.core.files.base import ContentFile

User = get_user_model()


@receiver(user_logged_in)
def user_logged_in_receiver(request, user, **kwargs):
    if 'sociallogin' not in kwargs:
        update_non_social_user(user)
    else:
        sociallogin = kwargs.get('sociallogin')
        update_user(user, sociallogin)


@receiver(user_signed_up)
def user_signed_up_receiver(request, user, **kwargs):
    if 'sociallogin' not in kwargs:
        update_non_social_user(user)
    else:
        sociallogin = kwargs.get('sociallogin')
        update_user(user, sociallogin)


def update_user(user, sociallogin):
    profile_updater = ProfileUpdater(user, sociallogin)
    profile_updater.update()


def update_non_social_user(user):
    avatar_url = "https://ui-avatars.com/api/?name={0}".format(user.username)
    profile = ProfileModel(
        user=user,
        display_name=user.username,
        avatar_url=avatar_url
    )
    profile.save()
    save_profile_avatar(profile, avatar_url)


def save_profile_avatar(profile, avatar_url):
    name = urlparse(avatar_url).path.split('/')[-1]
    name = name+'.jpg' if name[-4:] not in ['.jpg',
                                            '.png', '.jpeg', '.gif', '.ico'] else name
    response = requests.get(avatar_url)
    profile.avatar.save(name, ContentFile(response.content), save=True)


class ProfileModel(models.Model):
    user = models.OneToOneField(
        User,
        primary_key=True,
        verbose_name='user',
        related_name='profile',
        on_delete=models.CASCADE
    )
    display_name = models.CharField(max_length=256, blank=True, null=True)
    avatar_url = models.CharField(max_length=256, blank=True, null=True)
    avatar = models.ImageField(
        default='default.png', blank=True, upload_to='avatar/')

    def __str__(self):
        return self.display_name

    class Meta():
        db_table = 'user_profile'


class ProfileUpdater:
    def __init__(self, user, sociallogin):
        self.user = user
        self.avatar_url = sociallogin.account.get_avatar_url()
        self.account_data = sociallogin.account.extra_data
        self.provider = sociallogin.account.provider
        self.display_name = user.email

    def update(self):
        getattr(self, self.provider)()
        self.user.save()

        profile = ProfileModel(
            user=self.user,
            display_name=self.display_name,
            avatar_url=self.avatar_url
        )
        profile.save()

        # save the avatar image
        # save_profile_avatar(profile, self.avatar_url)

    def google(self):
        f_name = self.account_data['given_name']
        l_name = self.account_data['family_name']
        if f_name:
            self.user.first_name = f_name
        if l_name:
            self.user.last_name = l_name
        self.display_name = self.account_data['name']

    def github(self):
        self.user.first_name = self.account_data['name'].split()[0]
        self.user.last_name = self.account_data['name'].split()[1]
        self.display_name = self.account_data['login']

    def facebook(self):
        f_name = self.account_data['first_name']
        l_name = self.account_data['last_name']
        if f_name:
            self.user.first_name = f_name
        if l_name:
            self.user.last_name = l_name
        self.display_name = self.account_data['name']
        self.avatar_url = self.account_data['picture']['data']['url']

    def discord(self):
        self.display_name = self.account_data['username']
        self.avatar_url = "https://ui-avatars.com/api/?name={0}".format(
            self.display_name)
