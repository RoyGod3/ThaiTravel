# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Search', '0008_auto_20170313_0836'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='basesearch',
            name='c',
        ),
        migrations.RemoveField(
            model_name='basesearch',
            name='time',
        ),
        migrations.RemoveField(
            model_name='basesearch',
            name='url',
        ),
    ]
