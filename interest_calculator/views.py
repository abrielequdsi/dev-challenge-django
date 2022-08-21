from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import get_yearly_returns

from .serializers import InterestCalculatorSerializer


class InterestCalculatorView(APIView):
    def post(self, request):
        print(request.data)
        serializer = InterestCalculatorSerializer(data=request.data)

        if serializer.is_valid():
            interestData = get_yearly_returns(**serializer.data, years=50)
            return Response(interestData, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
