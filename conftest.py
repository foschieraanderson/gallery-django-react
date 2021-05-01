import pytest

from django.urls import reverse
from django.contrib.auth import get_user_model

from authentication.models import User


@pytest.fixture
def user_data():
    """ Retorna um usuário """
    return {
        "username": "admin",
        "email": "admin@email.com",
        "password": "12345678",
    }

@pytest.fixture
def user_data_admin():
    """ Retorna um usuário """
    return {
        'username': 'admin2',
        'email': 'admin2@email.com',
        'password': '12345678'
    }

@pytest.fixture
def user_admin(client, user_data_admin):
    """ Retorna um usuário autenticado """
    user_model = get_user_model()
    user_admin = user_model.objects.create_superuser(**user_data_admin)
    client.force_login(user_admin)
    return user_admin
