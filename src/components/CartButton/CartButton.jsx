import React from 'react';
import { BsCart4 } from 'react-icons/bs';

import './CartButton.css';

function CartButton() {
  return (
    <button type="button" className="cart__button">
      <BsCart4 />
      <span className="cart-status">1</span>
    </button>
  );
}

export default CartButton;
