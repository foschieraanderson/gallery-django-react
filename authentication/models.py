import re

from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.core import validators
from django.db import models


class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None):
        """Criando e salvando novo usuário no banco de dados"""
        if username is None:
            raise TypeError("Usuário deve ter um nome.")
        if email is None:
            raise TypeError("Usuário deve ter um email.")

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, email, password=None):
        """Criando um super usuário"""
        if password is None:
            raise TypeError("Senha não pode ser vazio.")

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user


class User(AbstractUser):
    """User model customizado. Usa email em vez de username para autenticar"""

    username = models.CharField(
        "Usuário",
        max_length=30,
        unique=True,
        validators=[
            validators.RegexValidator(
                re.compile("^[\w.@+-]+$"),
                "Informe um nome de usuário válido. "
                "Este valor deve conter apenas letras, números "
                "e os caracteres: @/./+/_ .",
                "invalid",
            )
        ],
        help_text="Um nome curto que será usado para identificá-lo de forma única na plataforma",
    )
    email = models.EmailField(
        "E-mail", max_length=255, unique=True, db_index=True
    )
    created = models.DateField("Criado", auto_now_add=True)
    modified = models.DateField("Modificado", auto_now=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    objects = UserManager()

    def __str__(self):
        return self.email
