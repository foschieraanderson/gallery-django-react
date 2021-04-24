from django.urls import path

from .views import UploadDetailView, UploadListCreateView

app_name = "upload"

urlpatterns = [
    path("uploads/", UploadListCreateView.as_view(), name="upload-list"),
    path("uploads/<int:pk>", UploadDetailView.as_view(), name="upload-detail"),
]
