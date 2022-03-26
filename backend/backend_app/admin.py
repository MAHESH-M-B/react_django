from django.contrib import admin

from .models import backend_app

# Register your models here.
class backend_appAdmin(admin.ModelAdmin):
    list_display=('username','password')


admin.site.register(backend_app,backend_appAdmin)
