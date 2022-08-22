from rest_framework.test import APITestCase, APIRequestFactory
from django.urls import reverse
from rest_framework import status
from .views import InterestCalculatorView
from .utils import get_yearly_returns


class TestInterestCalculator(APITestCase):
    factory = APIRequestFactory()
    view = InterestCalculatorView.as_view()

    def test_empty_data_should_return_error(self):
        data = {}
        response = self.client.post(reverse('interest_data'), data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_empty_value_should_return_error(self):
        data = {'initialDeposit': '', 'monthlyDeposit': 10, 'yearlyInterestRate': 1}
        response = self.client.post(reverse('interest_data'), data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_wrong_key_should_return_error(self):
        data = {'wrongKey': 10, 'monthlyDeposit': 10, 'yearlyInterestRate': 1}
        response = self.client.post(reverse('interest_data'), data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_proper_data_should_return_calculation(self):
        data = {'initialDeposit': 2, 'monthlyDeposit': 10, 'yearlyInterestRate': 1}
        response = self.client.post(reverse('interest_data'), data)
        calculated_data = get_yearly_returns(2, 10, 1, 50)

        self.assertEqual(response.data, calculated_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
