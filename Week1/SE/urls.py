from django.urls import path
from . import views

urlpatterns = [
    path('', views.alltodos,name='alltodos'),
    path('delete_item<int:tid>', views.deleteitem, name = 'deleteitem'),
    path('update_item<int:tid>', views.updateitem, name = 'updateitem')
    
]