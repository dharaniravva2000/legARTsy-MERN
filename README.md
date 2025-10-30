# 🎨 legARTsy - Art E-Commerce & Exhibition Platform

legARTsy is a MERN stack (MongoDB, Express, React, Node.js) web application for browsing, purchasing, and managing art collections and exhibitions.  
Users can register, log in, manage their profiles, and make purchases. Admin can manage art collections and view customer enquiries.

---

## 🚀 Features

### 🛍 User Features
- **Register & Login** with JWT Authentication
- **Profile Management**
  - username, email, date of birth
  - View order history with order numbers
- **Browse Art Collections**
- **Add to Cart** & Checkout
- **View Exhibitions**
- **Contact Form** to send enquiries to admin

### 👨‍💼 Admin Features (Planned)
- View customer enquiries
- Manage art products and exhibitions

---

## 🛠 Tech Stack

**Frontend**
- React.js
- Axios
- React Router DOM
- CSS3 (custom styling)

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- bcryptjs (password hashing)
- jsonwebtoken (JWT auth)
- dotenv (environment variables)
- cors (cross-origin requests)

**Database**
- MongoDB Atlas (Cloud Database)

**Database**
- MongoDB Atlas (Cloud Database)

---

## 📂 Project Structure

legARTsy/
│
├── client/ # React Frontend
│ ├── src/
│ │ ├── components/ # Reusable UI Components (Navbar, Footer, Cards, etc.)
│ │ ├── pages/ # Page Components (Home, Login, Register, Profile, Cart, etc.)
│ │ ├── styles/ # CSS files
│ │ └── App.jsx
│ └── package.json
│
├── server/ # Node.js Backend
│ ├── models/ # Mongoose Models (User.js, Product.js, Order.js)
│ ├── routes/ # Express Routes (auth.js, products.js, enquiries.js)
│ ├── server.js # Main server file
│ ├── .env # Environment variables
│ └── package.json
│
└── README.md # Documentation

Install dependencies

Backend
cd server
npm install


Frontend
cd client
npm install


MongoDB Atlas Setup

Go to MongoDB Atlas and create a free account.

Create a new Cluster (Shared Free Tier is enough for development).

Once created, click Browse Collections → Add My Own Data → Name your Database (e.g., legartsy) and Collections (users, products, orders).

Click on Database Access in the left menu → Add a new database user with a username & password.

Click on Network Access → Allow access from 0.0.0.0/0 (all IPs).

Go to Clusters → Click Connect → Connect your application → Copy your connection string:

📊 Connecting MongoDB Atlas to MongoDB Compass

Install MongoDB Compass.

Open Compass.

Paste your Atlas connection string into the "New Connection" box.

Click Connect — You should now see your database & collections.

My Mongodb 

Hosts

cluster0-shard-00-01.x4jsw.mongodb.net:27017

Environment Variables

Create a .env file inside the server/ directory:

PORT=3001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=yourSuperSecretKey123
ADMIN_EMAIL=Admin_Email Address
ADMIN_EMAIL_PASS= APP_Password from google account.

Running the App
Start Backend
cd server
node server.js

Start Frontend
cd client
npm start


The app will open at http://localhost:3000
Backend API runs on http://localhost:3001

API Endpoints
Auth Routes

POST /api/auth/register → Register new user

POST /api/auth/login → Login and receive JWT token

User Routes

GET /api/user/profile → Get user profile

PUT /api/user/profile → Update user profile

PUT /api/user/password → Change password

Enquiry Routes

POST /api/enquiry → Send enquiry from contact form

💳 Dummy Payment Details for Testing

When testing checkout and payment, you can use the following card details:

Card Number: 4242 4242 4242 4242
Expiry Date: 12/34
CVC: 123

Future Improvements

Integrate live payment gateway

Admin dashboard for managing products & orders

Email notifications for enquiries and orders

Multi-language support

