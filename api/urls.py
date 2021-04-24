from django.contrib import admin
from django.shortcuts import redirect
from django.urls import include, path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="API Central de Erros",
        default_version="1.0",
        description="API para centralização de logs de erro",
        terms_of_service="https://github.com/foschieraanderson/central-de-erros",
        contact=openapi.Contact(email="foschieraanderson@gmail.com"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    # App Admin
    path("admin/", admin.site.urls),
    # Endpoints de autenticação de usuários
    path("api/auth/", include("authentication.urls")),
    path("", lambda request: redirect("api/swagger/", permanent=False)),
    # Endpoints de Documentação
    path(
        "api/swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path(
        "api/redoc/",
        schema_view.with_ui("redoc", cache_timeout=0),
        name="schema-redoc",
    ),
]
