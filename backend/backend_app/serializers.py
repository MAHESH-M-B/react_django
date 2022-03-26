from pyexpat import model
from attr import field
from rest_framework import serializers
from .models import backend_app


class backend_appSerializer(serializers.ModelSerializer):
    class Meta:
        model=backend_app
        fields=('username','password')