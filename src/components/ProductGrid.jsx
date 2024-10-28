import React from 'react';
import Product from './Product';

function ProductGrid({ products, favourites, handleFavClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mx-4">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          favourites={favourites}
          handleFavClick={handleFavClick}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
