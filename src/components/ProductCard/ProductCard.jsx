import React from 'react';

function ProductCard() {
  return ( 
    <section className="product-card">
      
      <img src="" alt="product" className="card__image" />

      <div className="card__infos">
        <h2 className="card__price">R$399</h2>
        <h2 className="card__title">Apple Watch</h2>
      </div>
      <button type="button" className="button__add-cart">+</button>
    </section>
  );
}

export default ProductCard;
