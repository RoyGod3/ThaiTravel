# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Search', '0005_auto_20170313_0647'),
    ]

    operations = [
        migrations.AddField(
            model_name='basesearch',
            name='content',
            field=models.TextField(default=' ', max_length=10000),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='basesearch',
            name='time',
            field=models.CharField(default=111, max_length=500),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='basesearch',
            name='url',
            field=models.CharField(default=111, max_length=1000),
            preserve_default=False,
        ),
    ]
