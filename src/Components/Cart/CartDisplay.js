import React from 'react';
import './CartDisplay.css';
import { decrement, removeFromCart } from '../../actions/AddToCart';
import { useDispatch } from 'react-redux';

function CartDisplay({ item, index }) {
  const dispatch = useDispatch();
  const onClickDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="cart-data" key={index}>
      <div>
        <img src={item.image} alt="nav" width={100} height={100} />
      </div>
      <div>Title: {item.title}</div>
      <div>Price: Rs.{item.price}</div>
      <div>
        <button
          className="remove"
          onClick={() => {
            onClickDecrement();
            dispatch(removeFromCart(item.id));
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
export default CartDisplay;
