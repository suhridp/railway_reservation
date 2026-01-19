# 🚆 Railway Registration & Train Management System (MERN Stack)

A **full‑stack MERN web application** that simulates a **railway passenger registration system** with **user and admin roles**, **train management**, **secure authentication**, and a **feature‑rich admin dashboard**.

This project is designed to be **simple yet industry‑relevant**, making it **ideal for Cognizant GenC / entry‑level full‑stack roles**.

---

## 📌 Features Overview

### 👤 User Module

* Register passenger details
* View available trains (managed by admin)
* Select train, class, and journey date
* Auto‑generated **PNR number**
* Check registration status using PNR

### 🛠️ Admin Module

* Secure **JWT‑based admin login**
* Add new trains
* Delete trains (with safety validation)
* View all passenger registrations
* Approve / Reject passenger registrations
* Delete passenger records
* **Search & filter passengers** by:

  * Name / PNR
  * Train
  * Status (Waiting / Confirmed / Rejected)
* **Dashboard statistics**:

  * Total passengers
  * Confirmed
  * Waiting
  * Rejected

---

## 🧠 Business Rules Implemented

* A train **cannot be deleted** if passengers are already registered under it
* Admin‑only APIs are protected using **JWT middleware**
* Users can only view their own registration via PNR

---

## 🛠️ Tech Stack

### Frontend

* React.js (Multipage using React Router)
* HTML, CSS, JavaScript
* Fetch API

### Backend

* Node.js
* Express.js
* JWT Authentication

### Database

* MongoDB Atlas

---

## 📂 Project Structure

```
railway-system/
│
├── backend/
│   ├── config/db.js
│   ├── models/
│   │   ├── Admin.js
│   │   ├── Train.js
│   │   └── Passenger.js
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── trainRoutes.js
│   │   └── passengerRoutes.js
│   ├── middleware/auth.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   └── src/
│       ├── pages/
│       │   ├── UserRegister.jsx
│       │   ├── PNRStatus.jsx
│       │   ├── AdminLogin.jsx
│       │   ├── AdminDashboard.jsx
│       │   └── TrainManagement.jsx
│       ├── App.js
│       └── index.js
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Create admin user (one‑time):

```bash
node createAdmin.js
```

Default Admin Credentials:

```
Username: admin
Password: admin123
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

Backend runs on:

```
http://localhost:5000
```

---

## 🔐 Authentication Flow (Admin)

1. Admin logs in
2. Backend generates JWT token
3. Token stored in localStorage
4. Token sent in headers for admin requests
5. Backend middleware verifies token

---

## 📊 Dashboard Statistics Logic

```js
Total = passengers.length
Confirmed = status === "Confirmed"
Waiting = status === "Waiting"
Rejected = status === "Rejected"
```

Calculated dynamically from database records.

---

## 🎤 Interview Explanation (Quick)

> "This is a MERN‑based railway registration system with user and admin roles. Admins manage trains and passenger approvals using secured JWT authentication, while users register passengers and track status using PNR. The system enforces real‑world business rules like preventing train deletion when passengers exist."

---

## 📄 Resume Description

**Railway Registration & Train Management System (MERN Stack)**

* Developed a full‑stack railway registration system using React, Node.js, Express.js, and MongoDB Atlas
* Implemented JWT‑based authentication for secure admin access
* Built train management module with backend validation to maintain data integrity
* Designed admin dashboard with search, filters, and real‑time statistics
* Implemented passenger registration with PNR generation and status tracking

---

## 🚀 Future Enhancements

* Pagination for passenger list
* Role‑based permissions
* Deployment on Render / Netlify
* Seat allocation logic

---

## ✅ Status

✔ Completed
✔ Fully functional
✔ Resume‑ready
✔ Interview‑ready

---

**Author:** *Suhrid Behari Paul*
