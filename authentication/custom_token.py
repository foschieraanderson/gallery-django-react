from rest_framework_jwt.views import ObtainJSONWebToken


class MyObtainJSONWebToken(ObtainJSONWebToken):
    """
    Gera um token válido a partir do e-mail e senha de um usuário registrado

    * Retorna um JSON Web Token que pode ser usado para solicitações autenticadas.
    """
