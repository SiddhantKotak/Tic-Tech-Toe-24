# Generated by Django 5.1 on 2024-09-27 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100, unique=True)),
                ('phoneNumber', models.CharField(max_length=100, null=True)),
                ('intrest', models.CharField(max_length=100, null=True)),
            ],
        ),
    ]
