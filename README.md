# SkillNest

SkillNest is a modern educational web platform built as a **training project**.  
It focuses on clean UI, smooth user experience, and clear architecture while simulating
core features of an online learning platform.

---

## 📌 Project Overview

SkillNest allows users to browse courses, view detailed course pages, and manage a shopping cart.
A simple **login simulation** is implemented to demonstrate authentication state handling
without using a backend.

This project follows **best practices in modern React development** and is intended
for learning, training, and evaluation purposes.

---

## ✨ Features

- Browse courses with pagination
- View detailed course information
- Add courses to cart
- Remove courses from cart
- Clear cart functionality
- Login simulation (no backend)
- Prevent adding courses to cart if the user is not logged in
- Persistent cart and login state using `localStorage`
- Responsive and modern UI

---

## 🛠 Tech Stack

### Frontend

- **React**
- **React Router DOM (v6.23.1)**

### Styling

- **Tailwind CSS**

### Other Resources

- **Lucide React** (icons)
- **Sonner** (toast notifications)

### Tooling

- **Vite**
- **TypeScript**
- **ESLint**
- **Prettier**

---

## 🧭 Routing

Routing is implemented using **React Router DOM v6** with:

- Nested routes
- Lazy loading

This ensures a clean and scalable navigation structure.

---

## 🧠 State Management

- **React Context** is used for global state
- **useReducer** is used for cart & auth state management
- Authentication state is simulated
- Cart and login states are persisted using `localStorage`

---

## 🔐 Login Simulation

- Simple login page with:
  - Email
  - Password
- No backend or real authentication
- Login state stored as `isLoggedIn`
- Navbar switches between **Login** and **Logout**
- Cart actions are blocked when the user is not logged in

---

## 🎨 Design Resources

### Font

- [Lexend - Google Fonts](https://fonts.google.com/specimen/Lexend)

### Logo

- [Freepik – Flat Design Library Logo Template](https://www.freepik.com/free-vector/flat-design-library-logo-template_24005402.htm)

### Illustrations

- [unDraw](https://undraw.co/)

### Images

- [Unsplash](https://unsplash.com/)

---

## ▶️ Scripts

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Preview

```bash
npm run preview
```
