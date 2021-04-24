from datetime import datetime

from django.db import models


def directory_path(instance, filename):
    """ Define o diretório a ser salvo e renomeia a imagem """
    return "uploads/{0}-{1}".format(datetime.now(), filename)


class Upload(models.Model):
    image = models.ImageField("Imagem", upload_to=directory_path, blank=False)
    is_available = models.BooleanField("Disponível", default=False)

    created = models.DateTimeField("Criado", auto_now_add=True)

    class Meta:
        verbose_name = "Upload"
        verbose_name_plural = "Uploads"

    def __str__(self):
        return str(self.image)
