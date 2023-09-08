import {
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_LOADING,
  GET_PRODUCT_DETAIL_FAILURE,
} from '../actions/ProductDetails';

const initialState = {
  loading: true,
  details: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT_DETAIL_SUCCESS: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PRODUCT_DETAIL_LOADING: {
      return {
        ...state,
        loading: false,
        details: payload,
      };
    }
    case GET_PRODUCT_DETAIL_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
}
