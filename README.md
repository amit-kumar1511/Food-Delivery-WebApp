# HungriHai - Food Ordering Website 🍅

Hungri.hai is a **dynamic food ordering website** built with the **MERN Stack**. It provides a user-friendly platform for seamless online food ordering, featuring both user and admin functionalities.

## 🔗 Demo

* **User Panel:** https://food-delivery-frontend-fwtb.onrender.com 
* **Admin Panel:** https://food-delivery-webapps.onrender.com

## 🚀 Features

### User Panel

* Login / Signup
* Logout
* Add items to cart
* Place orders
* Filter food products
* Stripe Payment Integration

### Admin Panel

* Login / Signup
* Manage products (CRUD operations)
* Manage orders
* Role-based identification
* Beautiful alerts for actions

### Authentication & Security

* JWT Authentication
* Password Hashing with Bcrypt
* Authenticated APIs

### APIs

* RESTful APIs for all functionalities
* Role-based access control

---

Perfect! We can take that content and turn it into a polished, GitHub-ready README section that matches the style we used earlier. Here's the improved version:

---

## 💻 Run Locally

Follow these steps to run HungriHai on your local machine:

### 1. Clone the project

```bash
git clone https://github.com/amitkumar1511/Food-Delivery
```

### 2. Go to the project directory

```bash
cd Food-Delivery
```

### 3. Install dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Admin Panel

```bash
cd ../admin
npm install
```

#### Backend

```bash
cd ../backend
npm install
```

### 4. Setup Environment Variables

Create a `.env` file in the backend folder and add the following:

```
JWT_SECRET=YOUR_SECRET_TEXT
SALT=YOUR_SALT_VALUE
MONGO_URL=YOUR_DATABASE_URL
STRIPE_SECRET_KEY=YOUR_KEY
```

### 5. Configure URLs

* **Admin Panel:** `App.jsx` → `const url = YOUR_BACKEND_URL`
* **Frontend:** `StoreContext.js` → `const url = YOUR_BACKEND_URL`
* **Backend:** `orderController.js` → `const frontend_url = YOUR_FRONTEND_URL`

### 6. Start the servers

#### Backend

```bash
cd backend
nodemon server.js
```

#### Frontend

```bash
cd ../frontend
npm start
```

#### Admin Panel

```bash
cd ../admin
npm start
```

---

## 🛠 Tech Stack

* **Frontend:** React
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT
* **Payments:** Stripe
* **File Uploads:** Multer

---

## 🚀 Deployment

The application is deployed on **Render**.

---

## 🤝 Contributing

Contributions are always welcome! Just raise an issue, and we will discuss it.

---

## 💬 Feedback

If you have any feedback, feel free to reach out on [LinkedIn](www.linkedin.com/in/amit-kumar1511).

---


