import React from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

function Product({ product, favourites, handleFavClick }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-contain"
      />
      <div className="p-2">
        <h3 className="font-semibold">{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button
          className="text-red-500"
          onClick={() => handleFavClick(product.id)}
        >
          {favourites.includes(product.id) ? <IoHeart /> : <IoHeartOutline />}
        </button>
      </div>
    </div>
  );
}

export default Product;
