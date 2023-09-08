import { useSelector } from 'react-redux';
import CartDisplay from '../Components/Cart/CartDisplay';
import './Cart.css';
import React from 'react';

function Cart() {
  const productCart = useSelector(state => state.AddToCart.cart);
  // useSelector(state=>console.log('log of cart',state.AddToCart.cart));
  const loading = useSelector(state => state.AddToCart.loading);

  return (
    <div className="cart">
      <h1 className="title"> Cart</h1>

      {loading ? (
        <div> Loading... </div>
      ) : (
        <div className="item">
          {productCart.map((item, index) => (
            <CartDisplay key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Cart;
