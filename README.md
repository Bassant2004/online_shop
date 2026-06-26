# 🛍️ Trendify

A responsive Single Page Application (SPA) built with React and Vite.

Trendify fetches products from the Fake Store API and allows users to browse, search, and filter products by category through a clean and responsive interface.

---

## 🌐 Live Demo

https://online-shop-amber-alpha.vercel.app/

---

## ✨ Features

- Fetch products from the Fake Store API
- Search products by title
- Filter products by category
- Responsive design for mobile, tablet, and desktop
- Loading state while fetching data
- Error handling with a reusable ErrorMessage component
- Empty state when no products match the search
- Reusable React components
- Custom useFetch hook for API requests
- Optimized filtering using useMemo

---

## 🛠️ Tech Stack

- React 19
- Vite
- JavaScript (ES6+)
- CSS3
- Fake Store API

---

## 📁 Project Structure
src/
├── assets/
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── ErrorMessage.jsx
│   ├── Footer.jsx
│   ├── LoadingSpinner.jsx
│   ├── Navbar.jsx
│   └── Searchbar.jsx
├── hooks/
│   └── useFetch.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx

---

## 📷 Screenshot

> Add a screenshot of the application here.
![Trendify](./screenshot.png)

---

## 🚀 Installation
git clone https://github.com/Bassant2004/online_shop.git

cd online_shop

npm install

npm run dev

---

## 💡 Challenges & Solutions

During development, I worked on:

- Fetching data from an external API.
- Managing loading and error states.
- Building reusable React components.
- Implementing real-time search and category filtering.
- Improving performance using useMemo.
- Refactoring the fetch logic into a reusable custom hook (`useFetch`).
- Creating a responsive layout for different screen sizes.

---

## 🚀 Future Improvements

- Add a shopping cart.
- Add a product details page.
- Add pagination.
- Add user authentication.
- Add product sorting options.

---

## 👩‍💻 Author

Bassant

- GitHub: https://github.com/Bassant2004
 