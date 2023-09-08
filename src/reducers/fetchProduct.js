import {
  GET_PRODUCTS_LIST_FAILURE,
  GET_PRODUCTS_LIST_LOADING,
  GET_PRODUCTS_LIST_SUCCESS,
} from '../actions/fetchProduct';

import {
  GET_PRODUCTS_LIST_ELECTRONICS_FAILURE,
  GET_PRODUCTS_LIST_ELECTRONICS_LOADING,
  GET_PRODUCTS_LIST_ELECTRONICS_SUCCESS,
} from '../actions/fetchProduct';

import {
  GET_PRODUCTS_DETAILS_FAILURE,
  GET_PRODUCTS_DETAILS_SUCCESS,
  GET_PRODUCTS_DETAILS_LOADING,
} from '../actions/fetchProduct';

import {
  GET_PRODUCTS_CATEGORY_FAILURE,
  GET_PRODUCTS_CATEGORY_SUCCESS,
  GET_PRODUCTS_CATEGORY_LOADING,
} from '../actions/fetchProduct';

import {
  GET_PRODUCTS_CATEGORY_DETAILS_FAILURE,
  GET_PRODUCTS_CATEGORY_DETAILS_SUCCESS,
  GET_PRODUCTS_CATEGORY_DETAILS_LOADING,
} from '../actions/fetchProduct';

const initialState = {
  loading: false,
  list: [],
  list1: [],
  details: {},
  productcategory: [],
  productcategorydetails: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS_LIST_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_PRODUCTS_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        list: payload,
      };
    }

    case GET_PRODUCTS_LIST_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case GET_PRODUCTS_LIST_ELECTRONICS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_PRODUCTS_LIST_ELECTRONICS_SUCCESS: {
      return {
        ...state,
        loading: false,
        list1: payload,
      };
    }

    case GET_PRODUCTS_LIST_ELECTRONICS_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case GET_PRODUCTS_DETAILS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_PRODUCTS_DETAILS_SUCCESS: {
      return {
        ...state,
        loading: false,
        details: payload,
      };
    }

    case GET_PRODUCTS_DETAILS_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case GET_PRODUCTS_CATEGORY_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_PRODUCTS_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        productcategory: payload,
      };
    }

    case GET_PRODUCTS_CATEGORY_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case GET_PRODUCTS_CATEGORY_DETAILS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_PRODUCTS_CATEGORY_DETAILS_SUCCESS: {
      return {
        ...state,
        loading: false,
        productcategorydetails: payload,
      };
    }

    case GET_PRODUCTS_CATEGORY_DETAILS_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
}
