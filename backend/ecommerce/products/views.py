from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny
from django.shortcuts import get_object_or_404
from .serializers import *
from .models import *

class ProductGetView(RetrieveAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        product = self.kwargs['product']
        return get_object_or_404(Product, pk=product)

class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

class ProductByCategoryView(ListAPIView):
    serializer_class = CategoryProductsSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        category = self.kwargs['category']
        return ProductCategories.objects.filter(category=category)

class CategoryListView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryNameSerializer
    permission_classes = [AllowAny]