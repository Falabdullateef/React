import React, { useEffect, useState } from "react";

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
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading Data, Please Wait.</div>;
  }

  return (
    <div className="container">
      {products.length > 0 &&
        products.map((item) => (
          <div key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
          </div>
        ))}
    </div>
  );
};

export default LoadMore;
