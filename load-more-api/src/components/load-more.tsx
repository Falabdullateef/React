import React, { useEffect, useState } from "react";

const LoadMore = () => {
  const [loading, setloading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setloading(true);
      const reponse = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await reponse.json();

      if (result && result.products && result.products.length) {
        setloading(false);
      }
    } catch (error) {
      setloading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  if (loading) {
    return <div>Loading Data, Please Wait.</div>;
  }
  return <div>LoadMore</div>;
};

export default LoadMore;
