from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    # App Admin
    path("admin/", admin.site.urls),
]
