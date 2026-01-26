# 🔗 MinionURL - Advanced URL Shortener

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Docker](https://img.shields.io/badge/docker-ready-blue)

A robust, full-stack URL shortening service built with the **MERN Stack** and containerized for production deployment. This project demonstrates modern web development practices, microservices architecture, and DevOps automation.

## 🚀 Live Demo
**Frontend:** [https://shivaniyadav7.github.io/url-shortener/](https://shivaniyadav7.github.io/url-shortener/)  
**Backend Container:** Hosted on Render & Docker Hub

---

## 🛠 Tech Stack

* **Frontend:** React.js, Vite, CSS Modules
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas (Cloud)
* **DevOps:** Docker, GitHub Actions (CI/CD), Render, GitHub Pages

---

## ✨ Features

* **Instant Shortening:** Converts long URLs into compact, shareable links.
* **Containerized Backend:** Fully Dockerized application available on Docker Hub.
* **Responsive UI:** Optimized for mobile and desktop devices.
* **Security:** Implemented CORS policies and input validation.
* **Scalable Architecture:** Stateless backend design suitable for horizontal scaling.

---

## 🐳 Run with Docker (Recommended)

You can run the backend service instantly using my pre-built Docker image. You do not need to install Node.js—just Docker.

### 1. Pull the Image
```bash
docker pull shippdocker/minion-backend:latest
```
### 2. Run the Container
```bash
docker run -d -p 8080:8080 \
  -e ATLAS_URL="your_mongodb_connection_string_here" \
  -e BASE_URL="http://localhost:8080" \
  --name minion-backend \
  shippdocker/minion-backend:latest
```

## Local Development Setup
### 1) Clone the Repository
```bash
git clone [https://github.com/ShivaniYadav7/url-shortener.git](https://github.com/ShivaniYadav7/url-shortener.git)
cd url-shortener
```

### 2) Backend Setup
```bash
cd backend
npm install

# Create a .env file or export variables
# ATLAS_URL=your_mongodb_connection_string_here
# BASE_URL=http://localhost:8080

npm start
```

### 3) Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

## Project Structure
```text
url-shortener/
├── backend/                 # Express API & Database Logic
│   ├── models/              # Mongoose schemas
│   ├── controllers/         # Request handling + business logic
│   ├── routes/              # API routes
│   ├── Dockerfile           # Backend container config
│   └── server.js            # App entry point
│
├── frontend/                # React client (Vite)
│   ├── src/                 # UI components + hooks
│   ├── public/              # Static assets
│   └── vite.config.js       # Build configuration
│
└── README.md                # Project documentation
```
