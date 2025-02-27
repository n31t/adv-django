# Project Documentation

VIDEO: https://drive.google.com/file/d/14X9HKkuRk-BI2Gu_l7olns1eryJXBEbx/view?usp=sharing
VIDEO: https://drive.google.com/file/d/14X9HKkuRk-BI2Gu_l7olns1eryJXBEbx/view?usp=sharing
VIDEO: https://drive.google.com/file/d/14X9HKkuRk-BI2Gu_l7olns1eryJXBEbx/view?usp=sharing
## Overview

This project is a Django-based web application that provides an API for user authentication, product management, order processing, and analytics. It utilizes Django REST Framework for building the API and includes JWT authentication for secure access. Additionally, it uses Bootstrap for front-end styling and jQuery for AJAX requests. Additionally, it uses Redis for caching and Celery for task management.

## Features

- User registration and login with JWT authentication.
- Product management (CRUD operations).
- Order management for users.
- Analytics and reporting features.
- Notification system for user alerts.

## Technologies Used

- Django 5.1.6
- Django REST Framework
- Django Simple JWT for authentication
- Bootstrap for front-end styling
- jQuery for AJAX requests
- Redis for caching and Celery for task management


## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Create a virtual environment:

   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required packages:

   ```
   pip install -r requirements.txt
   ```

4. Set up the database:

   ```
   python manage.py migrate
   ```

5. Create a superuser for the admin interface:

   ```
   python manage.py createsuperuser
   ```

6. Run the development server:

   ```
   python manage.py runserver
   ```

## API Endpoints

### Authentication

- **Register User**
  - **Endpoint:** `/register/`
  - **Method:** POST
  - **Request Body:**
    ```json
    {
      "username": "string",
      "email": "string",
      "password": "string",
      "role": "string"  // Optional
    }
    ```

- **Login User**
  - **Endpoint:** `/login/`
  - **Method:** POST
  - **Request Body:**
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

- **Logout User**
  - **Endpoint:** `/logout/`
  - **Method:** POST
  - **Request Body:**
    ```json
    {
      "refresh": "string"
    }
    ```

### Products

- **List Products**
  - **Endpoint:** `/api/products/`
  - **Method:** GET

- **Create Product**
  - **Endpoint:** `/api/products/`
  - **Method:** POST
  - **Request Body:**
    ```json
    {
      "name": "string",
      "description": "string",
      "category": "integer",
      "price": "decimal"
    }
    ```