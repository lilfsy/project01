# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2018-07-19 17:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_auto_20180719_0242'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('description', models.TextField(blank=True)),
                ('product_img', models.ImageField(blank=True, upload_to='picture')),
            ],
        ),
    ]
