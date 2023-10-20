from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.


# Create your models here.
class ClubUserManager(BaseUserManager):
    def create_user(self, username, password=None, **kwargs):
        user = self.model(username=username, **kwargs)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, password=None, **kwargs):
        kwargs.setdefault('is_staff', True)
        kwargs.setdefault('is_superuser', True)
 
        if kwargs.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if kwargs.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(username, password, **kwargs)


class Utilisateur(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255, blank=True)
    last_name = models.CharField(max_length=255, blank=True)
    email = models.EmailField(blank=True,null=True,unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'

    objects = ClubUserManager()

    def __str__(self):
        return f"{self.username} {self.first_name} {self.last_name}"
    

class Meta:
        verbose_name = 'Utilisateur'
        verbose_name_plural = 'Utilisateurs'