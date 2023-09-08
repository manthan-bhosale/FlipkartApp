export const ADD_TO_CART_LOADING = '@@product/ADD_TO_CART_LOADING';
export const ADD_TO_CART_SUCCESS = '@@product/ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = '@@product/ADD_TO_CART_FAILURE';

export const addToCart = data => async dispatch => {
  try {
    dispatch({
      type: ADD_TO_CART_LOADING,
    });

    const response = data;

    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: ADD_TO_CART_FAILURE,
      payload: err,
    });
  }
};

export const CART_COUNTER_INCREMENT = '@@counter/CART_COUNTER_INCREMENT';
export const CART_COUNTER_DCREMENT = '@@counter/CART_COUNTER_DCREMENT';
export const REMOVE_FROM_CART = '@@product/REMOVE_FROM _CART';

export const increment = () => async dispatch => {
  dispatch({
    type: CART_COUNTER_INCREMENT,
  });
};
export const decrement = () => async dispatch => {
  dispatch({
    type: CART_COUNTER_DCREMENT,
  });
};
export const removeFromCart = Id => async dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: Id,
  });
};
