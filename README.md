
# Employee Management System

This project is a full‑stack web application for managing employee records. It features an Angular frontend and a Node.js backend with GraphQL and MongoDB. The application supports user authentication (signup and login), full CRUD operations on employee records, and advanced search functionality to filter employees by department and designation.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Postman Collection](#postman-collection)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **User Authentication:**
  - Signup to create a new account.
  - Login using email and password with JWT-based authentication.
- **Employee Management:**
  - Create, read, update, and delete employee records.
  - Search employees by department and/or designation.
- **GraphQL API:**
  - A robust backend API exposing queries and mutations for both user and employee operations.
- **Responsive UI:**
  - Modern, responsive Angular frontend providing a seamless user experience.

---

## Technologies

- **Frontend:** Angular, TypeScript, HTML5, SCSS
- **Backend:** Node.js, Express, GraphQL, MongoDB, Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **API Testing:** Postman

---

## Installation

### Backend Setup

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>/Backend
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Create a `.env` File:**
   In the Backend directory, create a file named `.env` with the following content:
   ```
   MONGO_URI=your_mongo_connection_string
   PORT=3000
   ```
   Replace `your_mongo_connection_string` with your actual MongoDB connection string.
4. **Start the Backend Server:**
   ```bash
   npm start
   ```

### Frontend Setup

1. **Navigate to the Frontend Directory:**
   ```bash
   cd <repository-directory>/Frontend
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start the Angular Development Server:**
   ```bash
   ng serve
   ```

---

## Usage

1. **User Signup and Login** to generate a JWT token.
2. **Manage Employees**: Add, update, delete, and view employees.
3. **Search Employees** by department and/or designation.

---

## API Documentation

GraphQL endpoint: `http://localhost:3000/graphql`

Includes:
- User Signup/Login
- Employee CRUD
- Employee Search

---

## Postman Collection

Included: `EmployeeManagementAPI.postman_collection.json`

---

## Deployment

Deployable using Heroku (backend) and Vercel/Netlify (frontend).

---

## Contact

**Student Name:** Vansh Kumar  
**Student ID:** 101402651  



