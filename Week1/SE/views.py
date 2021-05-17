from django.shortcuts import render,redirect
from .models import Mytodo
from .forms import TodoForm

# Create your views here.
def alltodos(request):
    tasks=Mytodo.objects.all()
    form=TodoForm()
    
    if request.method=='POST':
        form =TodoForm(request.POST)
        if form.is_valid():
            form.save()
    return render(request,'alltodo.html',{'tasks':tasks,'form' : form})

def deleteitem(request,tid):
    task=Mytodo.objects.get(id = tid)
    task.delete()
    return redirect('alltodos')

def updateitem(request,tid):
    todo=Mytodo.objects.get(id = tid)
    updateform= TodoForm(instance = todo)
    if request.method=='POST':
        updateform =TodoForm(request.POST, instance = todo)
        if updateform.is_valid():
            updateform.save()
            return redirect('alltodos')
    return render(request,'updateitem.html',{'todo':todo, 'updateform' : updateform})
