from django.shortcuts import render

from rest_framework import viewsets
from .serializers import backend_appSerializer
from .models import backend_app

# Create your views here.

class backend_appview(viewsets.ModelViewSet):
    serializer_class=backend_appSerializer
    queryset=backend_app.objects.all()