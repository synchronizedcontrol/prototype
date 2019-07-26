from rest_framework import serializers
from poc_protobuf.models import Person, Resume
from poc_protobuf.address import Address
from django_countries.fields import CountryField


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('id', 'alias', 'street',
                  'house_number', 'zip_code', 'country',)


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = ['id', 'employ_start_date',
                  'employ_end_date', 'position', 'experience']


class PersonSerializer(serializers.ModelSerializer):
    resume = ResumeSerializer(many=True)
    address = AddressSerializer()

    class Meta:
        model = Person
        fields = ['id', 'first_name', 'middle_name', 'last_name',
                  'address', 'created_date', 'resume']

    def create(self, validated_data):
        resumes = validated_data.pop('resume')
        address = validated_data.pop('address')
        saved_address = Address.objects.create(**address)
        instance = Person.objects.create(
            **validated_data, address=saved_address)
        for res in resumes:
            data = Resume.objects.create(person=instance, **res)
            instance.resume.add(data)

        return instance


class PersonListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['id', 'first_name', 'middle_name', 'last_name',
                  'created_date', ]
