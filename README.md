# 🔗 MinionURL — Advanced URL Shortener (MERN + Docker)

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Docker](https://img.shields.io/badge/docker-ready-blue.svg)

A full-stack **URL Shortener** built with the **MERN Stack**, designed with a scalable backend and modern DevOps practices.  
This project demonstrates real-world development workflows including containerization, CI/CD, and cloud deployment.

---

## 🚀 Live Demo

- **Frontend (GitHub Pages):** https://shivaniyadav7.github.io/url-shortener/  
- **Backend:** Dockerized service deployed via **Render + Docker Hub**

---

## 🧰 Tech Stack

**Frontend**
- React.js
- Vite
- CSS Modules

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB Atlas (Cloud)

**DevOps / Deployment**
- Docker
- GitHub Actions (CI/CD)
- Render
- GitHub Pages

---

## ✨ Features

- **Instant URL Shortening** — Convert long links into short, shareable URLs
- **Responsive UI** — Optimized for mobile and desktop screens
- **Dockerized Backend** — Production-ready backend container available on Docker Hub
- **Security** — CORS configuration + basic input validation
- **Scalable Architecture** — Stateless API design suitable for horizontal scaling

---

## 📦 Run Backend with Docker (Recommended)

Run the backend instantly using the pre-built Docker image.  
No need to install Node.js — only Docker is required.

### 1) Pull the Docker Image
```bash
docker pull shippdocker/minion-backend:latest

docker run -d -p 8080:8080 \
  -e ATLAS_URL="your_mongodb_connection_string_here" \
  -e BASE_URL="http://localhost:8080" \
  --name minion-backend \
  shippdocker/minion-backend:latest

git clone https://github.com/ShivaniYadav7/url-shortener.git
cd url-shortener

cd backend
npm install

ATLAS_URL=your_mongodb_connection_string_here
BASE_URL=http://localhost:8080

npm start

cd ../frontend
npm install
npm run dev

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
