from rest_framework.serializers import ModelSerializer, CharField, IntegerField, FloatField, ImageField, PrimaryKeyRelatedField
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

########################################################################
# Category with all products within the category
# class CategoryProductsSerializerNew(ModelSerializer):
#     id = IntegerField(source='product.id')
#     name = CharField(source='product.name')
#     price = FloatField(source='product.price')
#     image = ImageField(source='product.image')

#     class Meta:
#         model = ProductCategories
#         fields = ('id', 'name', 'price', 'image')

# # Get all data on a category, including all products within the category
# class CategorySerializerNew(ModelSerializer):
#     products = CategoryProductsSerializerNew(many=True)
#     class Meta:
#         model = Category
#         fields = '__all__'