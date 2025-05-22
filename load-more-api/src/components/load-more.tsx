import React, { useEffect, useState } from "react";
import "./index.css";

// Define the product type
interface Product {
  id: number;
  title: string;
  thumbnail: string;
}

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState(0);
  const [disabledbutton, setdisabledbutton] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        // Update the products state with the fetched data
        setProducts((prevProducts) => [...prevProducts, ...result.products]);
        setTotalProducts(result.total || 0);

        // Check if we've loaded all available products
        if (products.length + result.products.length >= result.total) {
          setdisabledbutton(true);
        }
      } else {
        // No more products to load
        setdisabledbutton(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      // Always set loading to false when done, whether successful or not
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);
  useEffect(() => {
    if (products.length > 0 && totalProducts > 0) {
      // If we've loaded all products or reached 100 (whichever comes first)
      if (products.length >= totalProducts || products.length >= 100) {
        setdisabledbutton(true);
      }
    }
  }, [products, totalProducts]);

  return (
    <div className="container">
      <div className="product-container">
        {products.length > 0 &&
          products.map((item) => (
            <div className="product" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        <div className="button-container">
          <button
            disabled={disabledbutton || loading}
            onClick={() => setCount(count + 1)}
          >
            {loading ? "Loading..." : "Load More Products"}
          </button>
          {disabledbutton && <p>You have reached the limit</p>}
        </div>
      </div>
      {loading && (
        <div className="loading-indicator">Loading Data, Please Wait.</div>
      )}
    </div>
  );
};

export default LoadMore;
