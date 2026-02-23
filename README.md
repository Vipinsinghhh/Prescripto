# 🏥 Prescripto

## 🚀 Live Demo

- 🌐 <a href="https://prescripto-frontend-8rtl.onrender.com" target="_blank" rel="noopener noreferrer">User Application</a>
- 🛠️ <a href="https://prescripto-admin-4efz.onrender.com" target="_blank" rel="noopener noreferrer">Admin Panel</a>



## 📌 Project Overview

The **Prescripto** is a full-stack web application built using the **MERN Stack**: **MongoDB**, **Express.js**, **React.js**, and **Node.js**. This platform streamlines the process of booking medical appointments online by enabling **Admins**, **Doctors**, and **Users** to manage profiles, schedules, and appointments with ease.

The backend features **secure authentication**, **image upload with Cloudinary**, **appointment management**, and **role-based dashboards**, while the frontend (React) provides a responsive and interactive UI.

---

## 📋 Table of Contents

1. [Key Features](#key-features)
2. [Project Structure](#project-structure)
3. [Tech Stack](#tech-stack)
4. [Installation & Setup](#installation--setup)
5. [API Endpoints](#api-endpoints)
6. [Testing](#testing)
7. [Deployment](#deployment)
8. [Future Improvements](#future-improvements)
9. [Author](#author)
10. [Acknowledgments](#acknowledgments)

---

<a name="key-features"></a>
## 🚀 Key Features

### 👤 **User Capabilities**

- Secure **registration and login** with JWT authentication
- **Profile management**, including uploading and updating profile photos
- Intuitive **appointment booking**, viewing, and cancellation
- Seamless and secure **online payment processing**

### 🩺 **Doctor Capabilities**

- Secure **doctor login** and role-based dashboard access
- Full control over **appointment management**: view, confirm, complete, or cancel
- Ability to **update profile and professional details**, including image uploads
- Access to a personalized **dashboard** summarizing key performance metrics

### 🛠️ **Admin Capabilities**

- Role-restricted **admin authentication** with elevated privileges
- **Doctor onboarding**: add new doctors with image uploads and role assignments
- View and manage the list of all **registered doctors**
- **Toggle doctor availability** and manage platform compliance
- Access to comprehensive **appointment analytics and system dashboard**

### 🔐 **Security & Middleware Architecture**

- **JWT-based token authentication** for all user roles (Admin, Doctor, User)
- Passwords encrypted using **bcrypt hashing**
- **Middleware-layered access control** ensures secure and role-specific route access
- **Image handling** via **Cloudinary** (CDN) + **Multer** (upload middleware)
- Global **error handling**, request validation, and **secure RESTful API** conventions
- Standardized **HTTP status codes** and response structure for consistent API usage

### 🌐 **Modern React Frontend**

- Built with **React (Vite)** for lightning-fast performance and optimized build pipeline
- Styled using **Tailwind CSS** with full **mobile responsiveness**
- Organized in a **scalable component architecture** for maintainability and reusability
- Integrated with **Axios** and **React Router** for robust API communication and navigation
- Enhanced UX with **Toast notifications** and role-based conditional rendering

---

<a name="project-structure"></a>
## 📁 Project Structure

```
📦 PRESCRIPTO
├── backend (Express + Node + MongoDB)
│   ├── config/
│   │   ├── cloudinary.js
│   │   └── mongodb.js
│   ├── controllers/
│   │   ├── adminController.js
│   │   ├── doctorController.js
│   │   └── userController.js
│   ├── middlewares/
│   │   ├── authAdmin.js
│   │   ├── authDoctor.js
│   │   ├── authUser.js
│   │   └── multer.js
│   ├── models/
│   │   ├── appointmentModel.js
│   │   ├── doctorModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── adminRoute.js
│   │   ├── doctorRoute.js
│   │   └── userRoute.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── admin (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── context/
│   │   │   ├── AdminContext.jsx
│   │   │   ├── AppContext.jsx
│   │   │   └── DoctorContext.jsx
│   │   ├── pages/
│   │   │   ├── Admin/
│   │   │   │   ├── AddDoctors.jsx
│   │   │   │   ├── AllAppointments.jsx
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   └── DoctorsList.jsx
│   │   │   ├── Doctor/
│   │   │   │   ├── DoctorAppointment.jsx
│   │   │   │   ├── DoctorDashboard.jsx
│   │   │   │   └── DoctorProfile.jsx
│   │   │   └── Login.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── frontend (React + Vite)
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── Banner.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Header.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── RelatedDoctors.jsx
    │   │   ├── SpecialityMenu.jsx
    │   │   └── TopDoctors.jsx
    │   ├── context/
    │   │   └── AppContext.jsx
    │   ├── pages/
    │   │   ├── About.jsx
    │   │   ├── Appointment.jsx
    │   │   ├── Contact.jsx
    │   │   ├── Doctors.jsx
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── MyAppointments.jsx
    │   │   └── MyProfile.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .env
    ├── index.html
    ├── vite.config.js
    └── package.json
```
---

<a name="tech-stack"></a>
## 🛠️ Tech Stack

### Backend

- **Node.js** & **Express.js** – API and server logic
- **MongoDB + Mongoose** – Database & data modeling
- **JWT** – Role-based authentication
- **bcrypt** – Secure password hashing
- **Cloudinary** – Image hosting
- **Multer** – File upload handling
- **dotenv** – Environment variable management
- **cors** – Cross-origin resource sharing

### Frontend

- **React** – Component-based UI
- **Vite** – Lightning-fast build tool
- **Tailwind CSS** – Utility-first styling
- **Axios** – HTTP client
- **React Router** – SPA routing
- **React Toastify** – User notifications

---

<a name="installation--setup"></a>
## 🔧 Installation & Setup

### 📦 Prerequisites

- [Node.js](https://nodejs.org/)
- [React.js](https://react.dev/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Cloudinary account](https://cloudinary.com/)
- [Razorpay account](https://razorpay.com/) (for payment flow)

### 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Vipinsinghhh/Prescripto.git
cd Prescripto/
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file with:

```
PORT=4000
MONGODB_URI='mongodb+srv://<user>:<pass>@cluster.mongodb.net'
JWT_SECRET=<your_secret>
CLOUDINARY_NAME=<name>
CLOUDINARY_API_KEY=<key>
CLOUDINARY_API_SECRET=<secret>
ADMIN_EMAIL=<email>
ADMIN_PASSWORD=<pass>
```

Start dev server:

```bash
npm run server
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create `.env` at project root:

```
VITE_BACKEND_URL='http://localhost:4000'
```

Start the client:

```bash
npm run dev
```

### 4. Test Full Flow

1. **Admin**: login → add doctors → update availability.
2. **Doctor**: login → manage appointments.
3. **User**: register/login → update profile → book/cancel → make payment.

---

<a name="api-endpoints"></a>
## 🌐 API Endpoints

### 👤 User Routes (`/api/user`)

- `POST /register`: Register a new user
- `POST /login`: Login user and return token
- `GET /get-profile`: Get logged-in user profile
- `POST /update-profile`: Update profile with image upload
- `POST /book-appointment`: Book an appointment with a doctor
- `GET /appointments`: List logged-in user appointments
- `POST /cancel-appointment`: Cancel a booking
- `POST /payment-razorpay`: Create Razorpay order for appointment payment
- `POST /verifyRazorpay`: Verify Razorpay payment status

### 🩺 Doctor Routes (`/api/doctor`)

- `GET /list`: Get list of doctors
- `POST /login`: Doctor login
- `GET /appointments`: View doctor appointments
- `POST /complete-appointment`: Mark appointment as complete
- `POST /cancel-appointment`: Cancel an appointment
- `GET /dashboard`: Doctor dashboard data
- `GET /profile`: Get doctor profile
- `POST /update-profile`: Update doctor profile

### 🛠️ Admin Routes (`/api/admin`)

- `POST /login`: Admin login
- `POST /add-doctor`: Add new doctor with image
- `POST /all-doctors`: View all registered doctors
- `POST /change-availability`: Change doctor availability
- `GET /appointments`: View all appointments
- `POST /cancel-appointment`: Cancel appointment
- `GET /dashboard`: Admin dashboard metrics


---

<a name="testing"></a>
## 🧪 Testing

### Backend

- Use tools like **Postman**, **Thunder Client** or **Insomnia**.
- Implement unit tests later using **Jest** or **Mocha**.

### Frontend

- Build and deploy test versions.
- Use **React Testing Library** or **Cypress** for integration tests.

---

<a name="deployment"></a>
## 📦 Deployment

- **Backend**: Deploy on Render, Heroku, or DigitalOcean.
- **Frontend**: Deploy on Render, Vercel, Netlify, or AWS.
- Configure environment variables on the platform.
- Use services like **MongoDB Atlas** and **Cloudinary** for production assets and images.

---

<a name="future-improvements"></a>
## 🚀 Future Improvements

- Email/SMS notifications for appointment booking, cancellation, and reminders
- Add Stripe support alongside existing Razorpay integration
- Advanced doctor slot management with calendar-based scheduling
- Role-based analytics with richer admin and doctor insights
- Pagination, search, and filters for doctors and appointments
- Automated testing setup (API + frontend integration tests)
- CORS hardening and production-grade security middleware


---

<a name="author"></a>
## 👨‍💻 Author

**Vipin Singh**

- 📧 Email: [vipinsingh.cse@gmail.com](mailto:vipinsingh.cse@gmail.com)
- 💻 [GitHub](https://github.com/Vipinsinghhh)
- 💼 [LinkedIn](https://www.linkedin.com/in/vipin-singh1/)

---

<a name="acknowledgments"></a>
## 🎉 Acknowledgments

- MongoDB Atlas for the scalable cloud database
- Cloudinary for seamless image management
- The MERN community for open-source knowledge and resources

---

### Happy Coding!