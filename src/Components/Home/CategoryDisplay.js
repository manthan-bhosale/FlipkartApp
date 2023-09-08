import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsCategory } from '../../actions/fetchProduct';
import './CategoryDisplay.css';
import { useNavigate } from 'react-router-dom';
function CategoryDisplay() {
  const productCategory = useSelector(
    state => state.fetchProduct.productcategory
  );
  const loading = useSelector(state => state.fetchProduct.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductsCategory());
  }, [dispatch]);

  return (
    <div>
      {loading && <div>Loading .....</div>}
      <div className="category">
        {productCategory.map((item, index) => (
          <a
            className="category-list"
            key={index}
            onClick={() => {
              navigate(`/categoryitems/${item}`);
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default CategoryDisplay;
