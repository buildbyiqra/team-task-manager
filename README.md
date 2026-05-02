# Team Task Manager (Backend)

A backend API for managing team tasks with authentication, built using Node.js, Express, and MongoDB.

---

##  Live Demo

👉 https://team-task-manager-production-b934.up.railway.app

---

##  GitHub Repository

👉 https://github.com/buildbyiqra/team-task-manager

---

##  Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Railway (Deployment)

---

##  Features

* User Signup & Login (JWT Authentication)
* Create Tasks
* Update Tasks
* Delete Tasks
* Get All Tasks
* Secure Routes

---

##  Project Structure

```
backend/
 ├── models/
 ├── routes/
 ├── server.js
 ├── package.json
```

---

##  Installation & Setup

1. Clone the repository:

```
git clone https://github.com/buildbyiqra/team-task-manager.git
```

2. Go to backend folder:

```
cd backend
```

3. Install dependencies:

```
npm install
```

4. Create `.env` file and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

5. Run the server:

```
node server.js
```

---

##  API Endpoints

### Auth Routes

* POST `/api/auth/register`
* POST `/api/auth/login`

### Task Routes

* GET `/api/tasks`
* POST `/api/tasks`
* PUT `/api/tasks/:id`
* DELETE `/api/tasks/:id`

---

##  Deployment

Deployed on Railway with MongoDB Atlas.

---

##  Author

**Iqra**
GitHub: https://github.com/buildbyiqra

---

