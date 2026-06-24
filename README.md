# Trendify

A React Single Page Application (SPA) that fetches products from the Fake Store API and allows users to search and filter products by category.

## Features

- Fetch products from Fake Store API
- Real-time search functionality
- Category filtering
- Loading state handling
- Error state handling
- Responsive design for desktop, tablet, and mobile
- Reusable React components

## Tech Stack

- React
- Vite
- CSS3
- Fake Store API

## Installation
npm install
npm run dev

## Build
npm run build

## Project Structure
src/
 ├── components/
 ├── assets/
 ├── hooks/
 ├── App.jsx
 └── App.css

## Challenges & Solutions

### Challenge
Filtering products efficiently without unnecessary calculations.

### Solution
Used React useMemo to optimize the filtering process and improve performance.

## Author

Bassant