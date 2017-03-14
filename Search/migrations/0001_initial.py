# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BaseSearch',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('content', models.CharField(max_length=100000)),
                ('url', models.CharField(max_length=1000)),
                ('time', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='ChineseSearch',
            fields=[
                ('basesearch_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to='Search.BaseSearch')),
            ],
            bases=('Search.basesearch',),
        ),
        migrations.CreateModel(
            name='EnglishSearch',
            fields=[
                ('basesearch_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to='Search.BaseSearch')),
            ],
            bases=('Search.basesearch',),
        ),
        migrations.CreateModel(
            name='ThaiSearch',
            fields=[
                ('basesearch_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to='Search.BaseSearch')),
            ],
            bases=('Search.basesearch',),
        ),
    ]
