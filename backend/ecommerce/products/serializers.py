from ast import Mod
from rest_framework.serializers import ModelSerializer
from .models import *

# Category name only
class CategoryNameSerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name',)

# Product all info, so can be nested within CategoryProductsSerializer to get all products for a given category
class ProductInfoSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

# Category with all products within the category
class CategoryProductsSerializer(ModelSerializer):
    product = ProductInfoSerializer()
    class Meta:
        model = ProductCategories
        fields = ('product',)

class CategorySerializer(ModelSerializer):
    products = CategoryProductsSerializer(many=True)
    class Meta:
        model = Category
        fields = '__all__'

# Products with all categories it is a member of
class ProductCategoriesSerializer(ModelSerializer):
    category = CategoryNameSerializer()
    class Meta:
        model = ProductCategories
        fields = ('category',)

class ProductSerializer(ModelSerializer):
    categories = ProductCategoriesSerializer(many=True)
    class Meta:
        model = Product
        fields = '__all__'