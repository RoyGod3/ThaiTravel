# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Search', '0007_auto_20170313_0834'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='basesearch',
            name='content',
        ),
        migrations.AddField(
            model_name='basesearch',
            name='c',
            field=models.TextField(default=b' ', max_length=10000),
        ),
    ]
