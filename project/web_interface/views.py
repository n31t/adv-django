from django.shortcuts import render

# Create your views here.

def auth_interface(request):
    return render(request, 'web_interface/auth.html', {'active_section': 'auth'})

def users_interface(request):
    return render(request, 'web_interface/users.html', {'active_section': 'users'})

def products_interface(request):
    return render(request, 'web_interface/products.html', {'active_section': 'products'})

def orders_interface(request):
    return render(request, 'web_interface/orders.html', {'active_section': 'orders'})

def sales_interface(request):
    return render(request, 'web_interface/sales.html', {'active_section': 'sales'})

def analytics_interface(request):
    return render(request, 'web_interface/analytics.html', {'active_section': 'analytics'})

def notifications_interface(request):
    return render(request, 'web_interface/notifications.html', {'active_section': 'notifications'})
