import { useState, useMemo } from "react";
import useFetch from "./hooks/useFetch";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card";
import LoadingSpinner from "./components/LoadingSpinner";
import Footer from "./components/Footer";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products"); 

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <>
      <Navbar />

      <Searchbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="categories">
        <button
          className="category-btn"
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>

        <button
          className="category-btn"
          onClick={() => setSelectedCategory("electronics")}
        >
          Electronics
        </button>

        <button
          className="category-btn"
          onClick={() => setSelectedCategory("jewelery")}
        >
          Jewelry
        </button>

        <button
          className="category-btn"
          onClick={() => setSelectedCategory("men's clothing")}
        >
          Men's Clothing
        </button>

        <button
          className="category-btn"
          onClick={() => setSelectedCategory("women's clothing")}
        >
          Women's Clothing
        </button>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : products.length === 0 ? (
        <h2 className="empty-state">
          📦 No products available
        </h2>
      ) : filteredProducts.length === 0 ? (
        <h2 className="empty-state">
          🔍 No results found
        </h2>
      ) : (
        <div className="products-container">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;