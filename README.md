# Payana Trails - Journey, Thoughtfully Curated!

Payana Trails is a premium travel and adventure platform designed to offer thoughtfully curated journeys. This full-stack application features a dynamic frontend for travelers to explore destinations, trails, and guest stories, along with a robust admin dashboard for comprehensive content management.

## 🚀 Key Features

- **Dynamic Trail Management**: Create, update, and organize travel trails with rich itineraries.
- **Destination Explorer**: Browse journeys by geography and categories (Cultural, Heritage, Signature).
- **Interactive Itineraries**: Rich-text editing and PDF export functionality for travel plans.
- **Admin Dashboard**: Full control over homepage sections, headers, footers, and content.
- **Guest Stories & Blogs**: Integrated blogging system for sharing travel experiences.
- **Newsletter & Enquiries**: Automated newsletter subscription (Mailchimp) and enquiry handling.
- **Responsive Design**: Modern, premium UI built with Framer Motion and Tailwind CSS.
- **SEO Optimized**: Open Graph support for social sharing and SEO-friendly metadata.

## 🛠️ Tech Stack

### Frontend

- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS 4, Framer Motion
- **State Management**: React Hooks & Context API
- **Icons/UI**: Lucide React, React Icons
- **Editing**: @uiw/react-md-editor
- **Routing**: React Router 7

### Backend

- **Runtime**: Node.js
- **Framework**: Express 5
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT & Bcryptjs
- **Media**: Sharp (Image processing), Multer (File uploads)
- **Services**: Nodemailer (Email), @ilovepdf (PDF utilities)
- **Security**: CORS, Helmet

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js (v18+)
- MongoDB (Local or Atlas)
- NPM or Yarn

### 1. Clone the repository

```bash
git clone <repository-url>
cd Payana_Trails
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
PORT=8000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password
FROM_NAME=Payana Trails

# Integrations
MAILCHIMP_API_KEY=your_mailchimp_key
MAILCHIMP_LIST_ID=your_list_id
MAILCHIMP_DC=usXX
ILOVEPDF_PUBLIC_KEY=your_public_key
ILOVEPDF_SECRET_KEY=your_secret_key

# App URLs
SITE_URL=http://localhost:5173
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

---

## 🏃 Running the Application

### Development Mode

**Start Backend:**

```bash
cd backend
npm start
```

**Start Frontend:**

```bash
cd frontend
npm run dev
```

### Production Build

**Build Frontend:**

```bash
cd frontend
npm run build
```

The backend is configured to serve the production build from `frontend/dist`.

---

## 📁 Project Structure

```text
Payana_Trails/
├── backend/
│   ├── config/          # Database connection
│   ├── controllers/     # Business logic
│   ├── middlewares/     # Auth, Cache, OG Tags
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API endpoints
│   ├── services/        # External API integrations
│   ├── uploads/         # Static file storage
│   └── server.js        # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI elements
│   │   ├── hooks/       # Custom React hooks
│   │   ├── pages/       # Page components
│   │   ├── services/    # API calling logic
│   │   └── utils/       # Helper functions
│   └── vite.config.js
└── README.md
```

## 📄 License

This project is for internal use/internship purposes. All rights reserved.

---

_Created by Rohit Mehta._
