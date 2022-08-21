from rest_framework import serializers


class InterestCalculatorSerializer(serializers.Serializer):
    initial_deposit = serializers.DecimalField(max_digits=None, decimal_places=2)
    monthly_deposit = serializers.DecimalField(max_digits=None, decimal_places=2)
    monthly_interest_rate = serializers.DecimalField(max_digits=None, decimal_places=2)
