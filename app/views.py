from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index/index.html')


def detail(request):
    return render(request, 'detail/detail.html')


def common(request):
    return render(request, 'common/common.html')


def cart(request):
    return render(request, 'cart/cart.html')


def login(request):
    return render(request, 'login/login.html')


def register(request):
    return render(request, 'register/register.html')


def about(request):
    return render(request, 'about/about.html')