from rest_framework import serializers


class InterestCalculatorSerializer(serializers.Serializer):
    principal_deposit = serializers.DecimalField(decimal_places=2)
    monthly_deposit = serializers.DecimalField(decimal_places=2)
    monthly_interest_rate = serializers.DecimalField(decimal_places=2)
