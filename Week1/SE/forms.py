from django import forms
from .models import Mytodo

class TodoForm(forms.ModelForm): #connect front end to the database
    class Meta:
        model =Mytodo
        fields=['task',]