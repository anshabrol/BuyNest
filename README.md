# 🌐🚚 BuyNest

BuyNest is a full-stack Ecommerce Web Application built using Django REST Framework, React, PostgreSQL, JWT Authentication, and Tailwind CSS.

The platform allows users to browse products, search products, manage a shopping cart, place orders, and view their order history.

---

## 🚀 Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Automatic Token Refresh
* Logout Functionality

### Product Management

* Product Listing
* Product Details Page
* Category-Based Products
* Product Search Functionality

### Cart System

* Add to Cart
* Remove from Cart
* Update Product Quantity
* Dynamic Cart Total Calculation

### Checkout

* Checkout Form
* Order Creation
* Cart Clearing After Successful Order

### Orders

* View Previous Orders
* Order History Page
* Order Item Details

### User Experience

* Responsive Design
* Toast Notifications
* Modern UI using Tailwind CSS
* Fixed Navigation Bar
* Search Bar
* Product Cards
* Protected Checkout and Orders Pages

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* React Toastify
* Vite

### Backend

* Django
* Django REST Framework
* Simple JWT

### Database

* PostgreSQL

### Authentication

* JWT (JSON Web Tokens)

---

## 📂 Project Structure

```text
BuyNest/
│
├── backend/
│   ├── store/
│   ├── backend/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── screenshots/
│
└── README.md
```

---

## 📸 Screenshots

### Home Page

![Home](Screenshots/Home.png)

### Product Details

![Product Details](Screenshots/product-details.png)

### Shopping Cart

![Cart](Screenshots/cart.png)

### Checkout

![Checkout](Screenshots/checkout.png)

### Order History

![Orders](Screenshots/orders.png)

### Authentication

![Login](Screenshots/login.png)

---

## ⚙️ Backend Setup

### Clone Repository

```bash
git clone <repository-url>
cd BuyNest
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

### Create Environment Variables

Create `.env`

```env
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
DB_PORT=5432
```

### Run Migrations

```bash
python manage.py makemigrations

python manage.py migrate
```

### Create Superuser

```bash
python manage.py createsuperuser
```

### Start Backend

```bash
python manage.py runserver
```

---

## 💻 Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## 🔑 Default Flow

```text
Browse Products
↓
View Product Details
↓
Add Product To Cart
↓
Checkout
↓
Place Order
↓
View Order History
```

---

## 🔮 Future Improvements

* Product Reviews & Ratings
* Wishlist Feature
* Online Payment Gateway Integration
* Order Status Tracking
* Admin Dashboard Analytics
* Cloudinary Image Storage
* Product Pagination

---

## 👨‍💻 Author

Ansh Abrol

Built as a Full Stack Ecommerce Project using Django REST Framework, React, PostgreSQL, and JWT Authentication.
