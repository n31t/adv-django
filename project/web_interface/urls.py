from django.urls import path
from . import views

urlpatterns = [
    path('', views.auth_interface, name='auth_interface'),
    path('users/', views.users_interface, name='users_interface'),
    path('products/', views.products_interface, name='products_interface'),
    path('orders/', views.orders_interface, name='orders_interface'),
    path('sales/', views.sales_interface, name='sales_interface'),
    path('analytics/', views.analytics_interface, name='analytics_interface'),
    path('notifications/', views.notifications_interface, name='notifications_interface'),
] 