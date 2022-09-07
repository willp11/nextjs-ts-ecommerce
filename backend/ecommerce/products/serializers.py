from ast import Mod
from rest_framework.serializers import ModelSerializer
from .models import *

# Category name only
class CategoryNameSerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name',)

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

# Category with all products within the category
class CategoryProductsSerializer(ModelSerializer):
    product = ProductSerializer()
    class Meta:
        model = ProductCategories
        fields = ('product',)

# Get all data on a category, including all products within the category
class CategorySerializer(ModelSerializer):
    products = CategoryProductsSerializer(many=True)
    class Meta:
        model = Category
        fields = '__all__'