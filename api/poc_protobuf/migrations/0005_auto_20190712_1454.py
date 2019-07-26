# Generated by Django 2.2.3 on 2019-07-12 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('poc_protobuf', '0004_auto_20190712_1418'),
    ]

    operations = [
        migrations.AddField(
            model_name='address',
            name='alias',
            field=models.CharField(default='Address', max_length=35),
        ),
        migrations.AlterField(
            model_name='person',
            name='created_date',
            field=models.DateTimeField(auto_now=True, verbose_name='date created'),
        ),
        migrations.AlterField(
            model_name='person',
            name='middle_name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
