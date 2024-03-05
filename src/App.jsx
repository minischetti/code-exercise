import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div className="App">
      <h1>Abercrombie & Fitch</h1>
      <h2>Products - {products.length}</h2>
      <ul>
        {products &&
          products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
      </ul>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
