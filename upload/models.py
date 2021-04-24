from django.db import models


class Upload(models.Model):
    image = models.ImageField("Imagem", upload_to="uploads/", blank=False)
    is_available = models.BooleanField("Disponível", default=False)

    created = models.DateTimeField("Criado", auto_now_add=True)

    class Meta:
        verbose_name = "Upload"
        verbose_name_plural = "Uploads"

    def __str__(self):
        return str(self.image)
