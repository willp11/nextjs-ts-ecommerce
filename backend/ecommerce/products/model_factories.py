import factory
from .models import *
import datetime

class CategoryFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Category
        django_get_or_create = ('name',)

    name = factory.Sequence(lambda n: 'Category %d' % n)

class ProductFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Product
        django_get_or_create = ('name','image')

    name = factory.Sequence(lambda n: 'Product %d' % n)
    price = 10.0
    image = factory.django.ImageField(color='blue')
    stripeId = factory.Sequence(lambda n: 'stripeId %d' % n)

class ProductCategoriesFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = ProductCategories
        django_get_or_create = ('product', 'category')

    product = factory.SubFactory(ProductFactory)
    category = factory.SubFactory(CategoryFactory)