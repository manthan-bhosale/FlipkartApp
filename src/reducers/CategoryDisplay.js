import {
  GET_CATEGORY_LIST_FAILURE,
  GET_CATEGORY_LIST_LOADING,
  GET_CATEGORY_LIST_SUCCESS,
} from '../actions/CategoryDisplay';

const initialState = {
  loading: false,
  category: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORY_LIST_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_CATEGORY_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        category: payload,
      };
    }
    case GET_CATEGORY_LIST_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
}
