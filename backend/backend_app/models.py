from django.db import models


# Create your models here.
class backend_app(models.Model):
    username=models.CharField(max_length=100)
    password=models.CharField(max_length=100)