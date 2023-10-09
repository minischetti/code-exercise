import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello from Abercrombie & Fitch!</h1>
      {products.map((product, index) => (
        <div key={index}>
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
        </div>
      ))}
    </div>
  );
}
