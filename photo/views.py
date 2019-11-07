import os
from django.conf import settings
from django.shortcuts import render
from django.templatetags.static import static
from .models import Picture, Location,Category
# Create your views here.
# def index(request):
#     path = settings.MEDIA_ROOT
#     img_list = os.listdir(path + '/images')
#     context = {'images' : img_list}
#     return render(request, "photo/index.html", context)

def home(request):
    images = Picture.objects.all()
    location = Location.objects.all()
    context = {
        "images":images,
        "location":location,
    }
    return render(request, 'photo/home.html', context)