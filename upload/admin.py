from django.contrib import admin

from upload.models import Upload

from .models import Upload


class UploadAdmin(admin.ModelAdmin):
    list_display = ("id", "image", "created")


admin.site.register(Upload, UploadAdmin)
