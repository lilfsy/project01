from django.conf.urls import url
from . import views
app_name = 'blog'
urlpatterns = [
    url(r'^$',views.index,name='index'),
    url(r'^post/(?P<pk>[0-9]+)/$', views.detail, name='detail'),
    url(r'^news/$',views.news,name='news'),
    url(r'^product/$',views.product,name='product'),
    url(r'^summary/$',views.summary,name='summary'),
    url(r'^honour/$',views.honour,name='honour'),
    url(r'^hr/$',views.hr,name='hr'),

]