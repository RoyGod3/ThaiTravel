# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Search', '0003_auto_20170313_0638'),
    ]

    operations = [
        migrations.AlterField(
            model_name='basesearch',
            name='content',
            field=models.TextField(max_length=20000),
        ),
    ]
