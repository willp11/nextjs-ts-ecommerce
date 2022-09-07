from django.urls import path
from .views import *

urlpatterns = [
    path('product-list-get/', ProductsGetView.as_view(), name='product_list_get')
]