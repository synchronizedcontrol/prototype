from django.db import models
from .address import Address

# Create your models here.


class Person(models.Model):
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    created_date = models.DateTimeField('date created', auto_now=True)

    def __str__(self):
        name = self.first_name + ' '
        if (self.middle_name != None):
            name += self.middle_name + ' '
        name += self.last_name
        return name

    class Meta:
        ordering: ['last_name']


class Resume(models.Model):
    person = models.ForeignKey(
        Person, related_name='resume', on_delete=models.CASCADE)
    employ_start_date = models.DateField('date employment started')
    employ_end_date = models.DateField('date employment ended')
    position = models.CharField(max_length=100)
    experience = models.TextField(max_length=500)
