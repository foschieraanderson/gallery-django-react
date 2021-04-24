from rest_framework import serializers

from .models import Upload


class UploadSerializer(serializers.ModelSerializer):
    # Serializer do objeto upload
    image = serializers.ImageField(
        max_length=None, use_url=True, required=True
    )

    class Meta:
        model = Upload
        fields = ["id", "image", "is_available"]
