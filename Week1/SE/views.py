from django.shortcuts import render,redirect,HttpResponse
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import AuthenticationForm

# Create your views here.

def login(request):
    if request.method == 'POST':
        f = AuthenticationForm(data=request.POST)
        if f.is_valid():
            return redirect('/success')
    else:
        f=AuthenticationForm()
    return render(request,'login.html',{'form': f})
    

def register(request):
    if request.method == 'POST':
        f = UserCreationForm(request.POST)
        if f.is_valid():
            f.save()
            return redirect('/')
    else:
        f=UserCreationForm()
    return render(request,'register.html',{'form': f})

def success(request):
    return render(request,'success.html')
