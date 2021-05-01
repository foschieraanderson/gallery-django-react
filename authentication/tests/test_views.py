import pytest

from django.contrib.auth import get_user_model
from django.urls import reverse

@pytest.mark.django_db
def test_user_register_view(client, user_data):
    """ Teste na view de registro de usuários """
    url = reverse('authentication:register')
    response = client.post(url, data=user_data)
    assert response.status_code == 201

@pytest.mark.django_db
def test_user_create_token_view(client, user_data):
    """ Teste na view que gera um token JWT """
    user = get_user_model().objects.create_user(**user_data)
    assert user.email == 'admin@email.com'
    url = reverse('authentication:obtain_token')
    data = {'email':f"{user_data['email']}", 'password': f"{user_data['password']}"}
    response = client.post(url, data)
    assert response.status_code == 200
    assert 'token' in response.data
