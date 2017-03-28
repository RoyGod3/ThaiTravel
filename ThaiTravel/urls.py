"""ThaiTravel URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from Search import views as search_view
import settings

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'search/home', search_view.home, name='search_home'),
    url(r'search/search', search_view.search, name='search_search'),
    url(r'search/get_comments', search_view.get_scene_comments, name='search_get_comments'),
    # url(r'^hello/', search_view.hello, name='search_hello'),
    url(r'^static/(?P<path>.*)$','django.views.static.serve',{'document_root':settings.STATIC_URL}),
]
