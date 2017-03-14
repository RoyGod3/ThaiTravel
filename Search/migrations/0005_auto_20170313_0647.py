# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Search', '0004_auto_20170313_0645'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='basesearch',
            name='content',
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
