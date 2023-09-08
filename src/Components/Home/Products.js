import './Product.css';
import ProductDisplay from './ProductDisplay';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  getProductsList,
  getProductsListElectronics,
} from '../../actions/fetchProduct';

const Products = () => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.fetchProduct.loading);
  const list = useSelector(state => state.fetchProduct.list);
  const list1 = useSelector(state => state.fetchProduct.list1);

  useEffect(() => {
    dispatch(getProductsList());
    dispatch(getProductsListElectronics());
  }, [dispatch]);

  return (
    <div className="all-product">
      {loading && <div>Loading .....</div>}

      <div className="item">
        {list1.map((item, index) => (
          <ProductDisplay key={index} item={item} />
        ))}
      </div>
      <div className="item">
        {list.map((item, index) => (
          <ProductDisplay key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
export default Products;
