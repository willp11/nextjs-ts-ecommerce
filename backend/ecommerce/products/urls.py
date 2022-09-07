from django.urls import path
from .views import *

urlpatterns = [
    path('product-get/<int:product>/', ProductGetView.as_view(), name='product_get_view'),
    path('product-list-get/', ProductListView.as_view(), name='product_list_get'),
    path('products-by-category-get/<int:category>/', ProductByCategoryView.as_view(), name='products_by_category_get'),
    path('category-list-get/', CategoryListView.as_view(), name='category_list_get')
]