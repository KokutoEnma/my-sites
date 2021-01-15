from django.db import models


class StatusModel(models.Model):
    id = models.AutoField(primary_key=True)
    status = models.BooleanField()

    def __str__(self):
        return str(self.status)

    class Meta():
        db_table = 'status'
