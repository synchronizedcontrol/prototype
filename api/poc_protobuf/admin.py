from django.contrib import admin
from .models import Person, Resume
from .address import Address
# Register your models here.


class AddressInLine(admin.StackedInline):
    model = Address


class ResumeInLine(admin.TabularInline):
    model = Resume
    extra = 1


class PersonAdmin (admin.ModelAdmin):
    inlines = [ResumeInLine]


admin.site.register(Person, PersonAdmin)
admin.site.register(Address)
