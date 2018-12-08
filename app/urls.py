from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^detail/$',views.detail,name='detail'),
    url(r'^common/$', views.common,name='common'),
    url(r'^cart/$',views.cart, name='cart'),
    url(r'^login/$',views.login, name='login'),
    url(r'^register/$',views.register,name='register'),
    url(r'^about/$',views.about,name='about'),
]