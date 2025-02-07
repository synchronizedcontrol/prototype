# Generated by Django 2.2.3 on 2019-07-12 10:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('poc_protobuf', '0002_auto_20190711_1243'),
    ]

    operations = [
        migrations.CreateModel(
            name='AddressOwner',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.AlterField(
            model_name='person',
            name='address',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='poc_protobuf.AddressOwner'),
        ),
        migrations.AddField(
            model_name='address',
            name='address_owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='poc_protobuf.AddressOwner'),
        ),
    ]
