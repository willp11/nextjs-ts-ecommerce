from django.urls import reverse
from rest_framework.test import APITestCase
from .serializers import *
from .model_factories import *

class ProductTests(APITestCase):
    
    def setUp(self):
        self.category = CategoryFactory()
        self.product = ProductFactory(image=None)
        self.product_categories = ProductCategoriesFactory(product=self.product, category=self.category)

    def test_product_get(self):
        url = reverse('product_get', kwargs={'product': self.product.id})
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, ProductSerializer(self.product).data)

    def test_product_list_get(self):
        url = reverse('product_list_get')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, ProductSerializer(Product.objects.all(), many=True).data)

    def test_products_by_category_get(self):
        url = reverse('products_by_category_get', kwargs={'category': self.category.id})
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, CategoryProductsSerializer(ProductCategories.objects.filter(category=self.category), many=True).data)

    def test_category_list_get(self):
        url = reverse('category_list_get')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, CategoryNameSerializer(Category.objects.all(), many=True).data)