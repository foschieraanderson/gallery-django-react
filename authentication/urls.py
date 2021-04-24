from django.urls import path

from . import views
from .custom_token import MyObtainJSONWebToken

app_name = "authentication"

urlpatterns = [
    # Endpoint para registro de usuários
    path("register/", views.RegisterView.as_view(), name="register"),
    # Endpoints protegidas para usuários registrados
    path("token/", MyObtainJSONWebToken.as_view(), name="obtain_token"),
]
