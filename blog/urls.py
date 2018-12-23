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
    url(r'^indexo/$',views.indexo,name='indexo'),
    url(r'^hrlxwm/$',views.hrlx,name='hrlx'),
    url(r'^hrygfc/$',views.hrfc,name='hrfc'), 
    url(r'^productly/$',views.productly,name='productly'),
    url(r'^qywh/$',views.qywh,name='qywh'),           
]