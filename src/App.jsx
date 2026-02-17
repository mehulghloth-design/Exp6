import React, { useEffect, useState } from 'react';
import ProductList from './ProductList.jsx'; 
import './App.css';

export default function App() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
       
        setproducts(data.products); 
      })
      .catch((error) => { 
         console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="app"> 
      <h1>Product Listing - 2500032607 <br /> <pre>        Mehul Ghloth</pre></h1> 
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}