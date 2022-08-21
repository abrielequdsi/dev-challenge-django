from django.urls import path
from .views import InterestCalculatorView

urlpatterns = [
    path('v1/interest-data/', InterestCalculatorView.as_view(), name="interest_data"),
]
