# 🛒 ShoppyGlobe E-Commerce Backend API

ShoppyGlobe Backend is a RESTful API built using **Node.js**, **Express**, and **MongoDB**.  
This API powers an e-commerce application by handling user authentication, product data, and shopping cart operations with JWT-based security.

---

## 🚀 Features

### 👤 User Authentication
- User Registration  
- User Login with JWT token generation  
- Secure password hashing using bcrypt  
- Protected routes using authentication middleware  

### 📦 Product Management
- Fetch all products from database  
- Fetch single product details by ID  
- Product data stored in MongoDB Atlas  

### 🛒 Cart Management (Protected Routes)
- Add product to cart  
- Update product quantity in cart  
- Remove product from cart  
- Cart linked to authenticated user  

### 🔐 Authorization & Security
- JWT token verification middleware  
- Only logged-in users can access cart routes  
- Environment variables for secrets and DB connection  

---

## 🛠 Technologies Used

- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- JWT (jsonwebtoken)  
- bcryptjs  
- dotenv  
- cors  

---

## 📂 Project Structure

```
shoppyglobe-api/
│
├── config/
│   └── db.js
│
├── models/
│   ├── User.js
│   ├── Product.js
│   └── Cart.js
│
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   └── cartRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
├── server.js
├── package.json
└── .env
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Tanuj-2531/ShoppyGlobe-api
cd shoppyglobe-api
```

*(Replace with your actual repository link)*

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Create `.env` File

Create a file named `.env` in the root folder and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

### 4️⃣ Start Development Server

```bash
npm run dev
```

Server will run at:

```
http://localhost:5000
```

---

## 🧪 API Endpoints

### 🔐 Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/register` | Register new user |
| POST | `/api/login` | Login user & get JWT token |

---

### 📦 Product Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |

---

### 🛒 Cart Routes (Protected)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/cart` | Add product to cart |
| PUT | `/api/cart/:id` | Update cart quantity |
| DELETE | `/api/cart/:id` | Remove item from cart |

⚠️ Cart routes require header:

```
Authorization: Bearer YOUR_TOKEN
```

---

## 🧠 How the API Works

- Users register and login to receive a JWT token  
- Token is sent in request headers for protected routes  
- Products are stored in MongoDB and fetched via API  
- Cart items are linked to user ID and product ID  
- Middleware verifies token before allowing cart operations  

---

## 🧪 Assignment Requirements Covered

✔ Node.js & Express API setup  
✔ MongoDB integration using Mongoose  
✔ CRUD operations for cart  
✔ Product fetching APIs  
✔ JWT Authentication & Authorization  
✔ Error handling & validation  
✔ Thunder Client API testing  
✔ Database collections for products & cart  

---

## 🔮 Future Improvements

- Add product creation & admin panel  
- Implement order management  
- Add payment gateway integration  
- Add user profile management  

---

## 👨‍💻 Author

Tanuj Agarwal  
GitHub: https://github.com/Tanuj-2531

---

## 📄 License

This project is for educational purposes only.
