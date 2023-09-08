import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsDetails } from '../actions/fetchProduct';
import './ProductDetails.css';

import { increment, addToCart } from '../actions/AddToCart';

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const productDetails = useSelector(state => state.fetchProduct.details);
  const loading = useSelector(state => state.fetchProduct.loading);

  const onClickIncrement = () => {
    dispatch(increment());
  };

  useEffect(() => {
    dispatch(getProductsDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1 className="title"> Product details </h1>
      {loading ? (
        <div>Loading... </div>
      ) : (
        <div className="product-detail">
          <img src={productDetails.image} alt="img" height={400} width={400} />
          <h3> {productDetails.title} </h3>
          <h3> Category: {productDetails.category} </h3>
          <h3> Rs. {productDetails.price} </h3>

          <button
            className="add-to-cart"
            onClick={() => {
              onClickIncrement();
              dispatch(addToCart(productDetails));
            }}
          >
            {' '}
            ADD TO CART{' '}
          </button>
        </div>
      )}
    </div>
  );
}
export default ProductDetails;
