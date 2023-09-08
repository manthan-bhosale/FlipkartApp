import React, {useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsCategoryDetails } from '../actions/fetchProduct';

import ProductDisplay from '../Components/Home/ProductDisplay';

function CategoryItems() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { item } = useParams();

  const productCategoryDetails = useSelector(
    state => state.fetchProduct.productcategorydetails
  );
  const loading = useSelector(state => state.fetchProduct.loading);

  useEffect(() => {
    dispatch(getProductsCategoryDetails(item));
  }, [dispatch, item]);
  return (
    <div>
      <h1>Product Category: {item}</h1>
      {loading && <div>Loading .....</div>}
      <div className="item">
        {productCategoryDetails.map((item, index) => (
          <ProductDisplay key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryItems;
