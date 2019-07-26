from django.db import models
from django_countries.fields import CountryField


class Address(models.Model):
    alias = models.CharField(max_length=35, default="Address")
    street = models.CharField(max_length=75)
    house_number = models.CharField(max_length=10)
    zip_code = models.CharField(max_length=10)
    country = CountryField()

    def __str__(self):
        return self.alias
