# Forever‑Buy 🛍️

A full‑stack **e‑commerce clothing platform** built using the **MERN stack**, featuring **secure JWT authentication**, **online payments via Razorpay**, **Cash on Delivery (COD)**, and a powerful **admin panel** for complete store management.

This project is designed to replicate real‑world e‑commerce workflows, including product management, order tracking, cart handling, and payment processing.

---

## 🧠 Features

### 👤 User Features

* Secure signup & login using **JWT authentication**
* Browse clothing products with updated pricing and discounts
* Add/remove products from **shopping cart**
* Place orders using:

  * 💳 **Razorpay (Online Payment Gateway)**
  * 💵 **Cash on Delivery (COD)**
* View order status after purchase
* Upload and manage **profile avatars stored securely on Cloudinary**

---

### 🛠️ Admin Panel Features

* Add new products with stock and pricing details
* Update product prices and manage discounts
* Maintain inventory by updating stock levels
* View and manage **all orders** with current status
* Upload and manage **product images stored on Cloudinary**
* Centralized dashboard for store operations

---

## 🔐 Authentication & Security

* JWT‑based authentication for session management
* Protected routes for users and admins
* Role‑based access ensuring admin‑only controls

---

## 🧱 Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5, CSS3

### Backend

* Node.js
* Express.js
* JWT Authentication

### Database

* MongoDB
* Mongoose ODM

### Payments

* Razorpay Payment Gateway
* Cash on Delivery (COD)

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Husainworks/forever-buy.git

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
CLOUDINARY_NAME=your_cloudinary_cloud_name
ADMIN_EMAIL=admin@forever.com
ADMIN_PASSWORD=your_admin_password
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

---

## ▶️ Run the Application

```bash
# Start backend server
npm run dev

# Start frontend
npm start
```

---

## 🧪 Payment & Order Flow

* Users add products to cart
* Select Razorpay or COD during checkout
* Successful payment creates an order entry
* Admin updates order status via admin panel
