from django.shortcuts import get_object_or_404
from drf_yasg.utils import swagger_auto_schema
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Upload
from .serializers import UploadSerializer


class UploadListCreateView(generics.ListCreateAPIView):
    queryset = Upload.objects.all()
    serializer_class = UploadSerializer
    permission_classes = [permissions.AllowAny]

    @swagger_auto_schema(
        responses={
            200: UploadSerializer(many=True),
        }
    )
    def get(self, request):
        """
        Lista todos os uploads previamente autorizados
        """
        queryset = self.get_queryset()
        serializer = UploadSerializer(queryset, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(
        responses={
            201: UploadSerializer(),
            400: "Má formatação",
        },
        request_body=UploadSerializer,
    )
    def post(self, request):
        """
        Cria um novo upload
        """
        upload = request.data
        serializer = UploadSerializer(data=upload)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class UploadDetailView(APIView):

    serializer_class = UploadSerializer

    @swagger_auto_schema(
        responses={
            200: UploadSerializer(),
            401: "Você não possui credenciais de autenticação válidas",
            404: "Não encontrado",
        }
    )
    def get(self, request, pk):
        """
        Lista detalhes de um upload

        * É preciso estar autenticado para visualizar.
        """
        queryset = get_object_or_404(Upload, pk=pk)
        serializer = UploadSerializer(queryset)
        return Response(serializer.data)

    @swagger_auto_schema(
        responses={
            202: UploadSerializer(),
            400: "Má formatação",
            401: "Você não possui credenciais de autenticação válidas",
            404: "Não encontrado",
        },
        request_body=UploadSerializer,
    )
    def put(self, request, pk):
        """
        Altera todos os dados do upload

        * É preciso estar autenticado para editar.
        """
        queryset = get_object_or_404(Upload, pk=pk)
        serializer = UploadSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(
        responses={
            202: UploadSerializer(),
            400: "Má formatação",
            401: "Você não possui credenciais de autenticação válidas",
            404: "Não encontrado",
        },
        request_body=UploadSerializer,
    )
    def patch(self, request, pk):
        """
        Altera parcialmente o upload

        * É preciso estar autenticado para editar.
        """
        queryset = get_object_or_404(Upload, pk=pk)
        serializer = UploadSerializer(
            queryset, data=request.data, partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(
        responses={
            204: "Sem conteúdo",
            401: "Você não possui credenciais de autenticação válidas",
            404: "Não encontrado",
        }
    )
    def delete(self, request, pk):
        """
        Deleta um upload

        * É preciso estar autenticado para deletar.
        """
        queryset = get_object_or_404(Upload, pk=pk)
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
