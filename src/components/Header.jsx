import React from 'react';

function Header() {
  return (
    <header className="text-center relative">
      <div className="hero">
        <video autoPlay loop muted className="w-full h-72 object-cover filter brightness-50">
          <source src="src/img/shredding.mp4" type="video/mp4" />
        </video>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold shadow-lg">
          Shred Shop
        </h1>
      </div>
    </header>
  );
}

export default Header;
