from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import get_yearly_returns

from .serializers import InterestCalculatorSerializer


class InterestCalculatorView(APIView):
    def post(self, request):
        serializer = InterestCalculatorSerializer(data=request.data)

        if serializer.is_valid():
            initial_deposit = serializer.data["initialDeposit"]
            monthly_deposit = serializer.data["monthlyDeposit"]
            yearly_interest_rate = serializer.data["yearlyInterestRate"]

            interestData = get_yearly_returns(initial_deposit, monthly_deposit, yearly_interest_rate, 50)

            return Response(interestData, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
