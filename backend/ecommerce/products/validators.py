from django.core.exceptions import ValidationError

def validate_not_negative(value):
    if value < 0:
        raise ValidationError('Value cannot be negative')