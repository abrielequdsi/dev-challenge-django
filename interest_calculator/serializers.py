from rest_framework import serializers


class InterestCalculatorSerializer(serializers.Serializer):
    initialDeposit = serializers.DecimalField(max_digits=None, decimal_places=2)
    monthlyDeposit = serializers.DecimalField(max_digits=None, decimal_places=2)
    yearlyInterestRate = serializers.DecimalField(max_digits=None, decimal_places=2)
