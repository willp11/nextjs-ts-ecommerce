from django.db import models
from .validators import validate_not_negative

class Category(models.Model):
    name = models.CharField(max_length=128, unique=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=256, unique=True)
    price = models.FloatField(validators=[validate_not_negative])
    image = models.ImageField(upload_to='products/')

    def __str__(self):
        return self.name

class ProductCategories(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='categories')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')

    class Meta:
        unique_together = ('product', 'category')

    def __str__(self):
        return '{} in {}'.format(self.product.name, self.category.name)

