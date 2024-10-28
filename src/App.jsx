import React, { useState } from 'react';
import productsData from './products.json';
import ProductGrid from './components/ProductGrid';

function App() {
  const [products, setProducts] = useState(productsData);
  const [favourites, setFavourites] = useState([]);

  const handleFavClick = (productId) => {
    if (favourites.includes(productId)) {
      const newFavourites = favourites.filter((id) => id !== productId);
      setFavourites(newFavourites);
    } else {
      setFavourites([...favourites, productId]);
    }
  };

  return (
    <>
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Products</h1>
      <ProductGrid products={products} favourites={favourites} handleFavClick={handleFavClick} />
    </div>
  </>
  );
}

export default App;
