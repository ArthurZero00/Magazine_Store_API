# Magazine API

A simple RESTful API built with **Node.js**, **Express**, and **express-validator** that allows you to manage magazine records. The project includes CRUD operations (Create, Read, Update, Delete) and structured request validation.

---

## 📌 Features

* Get all magazines
* Get a magazine by ID
* Create a new magazine
* Update an existing magazine
* Delete a magazine
* Input validation using `express-validator`
* Structured controller separation

---

## 📁 Project Structure

```
project/
├── controllers/
│   └── magazineController.js
├── routes/
│   └── magazineRoutes.js
├── server.js (or app.js)
└── package.json
```

---

## 🚀 Endpoints

### **GET /magazines**

Returns a list of all magazines.

### **GET /magazines/:id**

Fetch a single magazine by ID.

* Validations:

  * `id` must be a positive integer

### **POST /magazines**

Create a new magazine.

* Required fields:

  * `title` (string)
  * `price` (float, > 0)
  * `author` (string)

### **PUT /magazines**

Update an existing magazine.

* Required fields:

  * `id` (positive integer)
  * `author` (string)
* Optional but validated:

  * `title`
  * `price` (> 0)

### **DELETE /magazines/:id**

Remove a magazine by its ID.

* Validations:

  * `id` must be a positive integer

---

## 🛠️ Installation & Setup

### **1. Clone the repository**

```
git clone <your-repo-url>
cd project
```

### **2. Install dependencies**

```
npm install
```

### **3. Start the server**

```
npm start
```

Or using nodemon:

```
npm run dev
```

The server will start on the configured port (default: `http://localhost:3000`).

---

## 📦 Dependencies

* **express** — Web framework
* **express-validator** — Request validation
* **nodemon** (optional) — Auto-restart during development

---

## 🔧 Controller Functions (Expected)

Your controllers should export:

* `getMagazines()`
* `magazinesGetByID(id)`
* `createMagazine(req)`
* `updateMagazine(req)`
* `deleteMagazine(id)`

---

## 🧪 Example Request (POST)

```json
{
  "title": "Tech Monthly",
  "price": 9.99,
  "author": "John Doe"
}
```

---

## 📝 Notes

* All endpoints return JSON responses.
* Validation errors return status **400** with details.
* Server errors return **500**.

---

## 📄 License

This project is free to use for learning and development.

---

If you need improvements, more description, diagrams, or examples — just tell me!

## Project Structure

```
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── db.js
│   └── ...
├── index.html
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Overview

This project is a simple **Magazine Manager** full‑stack application built with:

* **Node.js + Express** (backend API)
* **PostgreSQL** (database)
* **Vanilla HTML/JS** (frontend)

It supports full CRUD operations:

* Create a magazine
* Read all magazines
* Read magazine by ID
* Update magazine
* Delete magazine

---

## Features

### 🔹 Backend (Express API)

* RESTful CRUD endpoints
* Input validation using `express-validator`
* PostgreSQL database integration using `pg`
* Organized in controllers + routes + DB layer
* Error handling and clean code structure

### 🔹 Frontend (index.html)

* A simple user interface for:

  * Creating magazines
  * Viewing all magazines
  * Updating a magazine inline
  * Deleting magazines
* Uses `fetch()` to communicate with the backend
* Styled with clean CSS (no frameworks)

---

## API Endpoints

### **GET /magazines**

Returns all magazines.

### **GET /magazines/:id**

Returns a magazine by ID.

### **POST /magazines**

Body:

```
{
  "title": "Name",
  "author": "Author",
  "price": 25.5
}
```

### **PUT /magazines**

Body:

```
{
  "id": 1,
  "title": "Updated",
  "author": "New Author",
  "price": 30
}
```

### **DELETE /magazines/:id**

Deletes a magazine by ID.

---

## Database

### Example Table Schema

```sql
CREATE TABLE magazines (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    price NUMERIC(10,2) NOT NULL
);
```

### DB Connection (`src/db.js`)

Uses environment variables:

* `DB_USER`
* `DB_PASS`
* `DB_NAME`
* `DB_PORT`
* `DB_HOST`

---

## Running the Project

### 1. Install Dependencies

```
npm install
```

### 2. Start Backend

```
node server.js
```

Backend runs at:

```
http://localhost:8082
```

### 3. Open Frontend

Just open `index.html` in a browser.

(If CORS issues appear, run a static server or enable CORS.)

---

## Frontend UI

* Located at root: `index.html`
* Contains forms + table showing magazine list
* Uses real-time updates after CRUD operations

---

## Tech Stack

* **Node.js**
* **Express**
* **PostgreSQL**
* **Vanilla JS + HTML + CSS**

---

If you want a more professional README (with logos, badges, screenshots), just tell me and I’ll enhance it!
