from django.contrib import admin
from django.urls import path,include
from accounts import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.login, name='login'),
    path('register', views.register, name='register'),
    path('success', views.success, name='success')
]