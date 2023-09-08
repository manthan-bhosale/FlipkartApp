import { combineReducers } from 'redux';
import fetchProduct from './fetchProduct';
import CategoryDisplay from './CategoryDisplay';
import AddToCart from './AddToCart';

const rootReducer = combineReducers({
  fetchProduct,
  CategoryDisplay,
  AddToCart,
});

export default rootReducer;
