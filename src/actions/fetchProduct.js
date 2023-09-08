export const GET_PRODUCTS_LIST_LOADING = '@@product/GET_PRODUCTS_LIST_LOADING';
export const GET_PRODUCTS_LIST_SUCCESS = '@@product/GET_PRODUCTS_LIST_SUCCESS';
export const GET_PRODUCTS_LIST_FAILURE = '@@product/GET_PRODUCTS_LIST_FAILURE';

export const getProductsList = () => async dispatch => {
  try {
    dispatch({
      type: GET_PRODUCTS_LIST_LOADING,
    });

    const response = await fetch('https://fakestoreapi.com/products').then(
      res => res.json()
    );

    dispatch({
      type: GET_PRODUCTS_LIST_SUCCESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCTS_LIST_FAILURE,
      payload: err,
    });
  }
};

export const GET_PRODUCTS_LIST_ELECTRONICS_LOADING =
  '@@product/GET_PRODUCTS_LIST_ELECTRONICS_LOADING';
export const GET_PRODUCTS_LIST_ELECTRONICS_SUCCESS =
  '@@product/GET_PRODUCTS_LIST_ELECTRONICS_SUCCESS';
export const GET_PRODUCTS_LIST_ELECTRONICS_FAILURE =
  '@@product/GET_PRODUCTS_LIST_ELECTRONICS_FAILURE';

export const getProductsListElectronics = () => async dispatch => {
  try {
    dispatch({
      type: GET_PRODUCTS_LIST_ELECTRONICS_LOADING,
    });

    const response = await fetch(
      'https://fakestoreapi.com/products/category/electronics'
    ).then(res => res.json());

    dispatch({
      type: GET_PRODUCTS_LIST_ELECTRONICS_SUCCESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCTS_LIST_ELECTRONICS_FAILURE,
      payload: err,
    });
  }
};
export const GET_PRODUCTS_DETAILS_LOADING =
  '@@product/GET_PRODUCTS_DETAILS_LOADING';
export const GET_PRODUCTS_DETAILS_SUCCESS =
  '@@product/GET_PRODUCTS_DETAILS_SUCCESS';
export const GET_PRODUCTS_DETAILS_FAILURE =
  '@@product/GET_PRODUCTS_DETAILS_FAILURE';

export const getProductsDetails = id => async dispatch => {
  try {
    dispatch({
      type: GET_PRODUCTS_DETAILS_LOADING,
    });

    const response = await fetch(
      `https://fakestoreapi.com/products/${id}`
    ).then(res => res.json());

    dispatch({
      type: GET_PRODUCTS_DETAILS_SUCCESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCTS_DETAILS_FAILURE,
      payload: err,
    });
  }
};

export const GET_PRODUCTS_CATEGORY_LOADING =
  '@@product/GET_PRODUCTS_CATEGORY_LOADING';
export const GET_PRODUCTS_CATEGORY_SUCCESS =
  '@@product/GET_PRODUCTS_CATEGORY_SUCCESS';
export const GET_PRODUCTS_CATEGORY_FAILURE =
  '@@product/GET_PRODUCTS_CATEGORY_FAILURE';

export const getProductsCategory = () => async dispatch => {
  try {
    dispatch({
      type: GET_PRODUCTS_CATEGORY_LOADING,
    });

    const response = await fetch(
      'https://fakestoreapi.com/products/categories'
    ).then(res => res.json());

    dispatch({
      type: GET_PRODUCTS_CATEGORY_SUCCESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCTS_CATEGORY_FAILURE,
      payload: err,
    });
  }
};
export const GET_PRODUCTS_CATEGORY_DETAILS_LOADING =
  '@@product/GET_PRODUCTS_CATEGORY_DETAILS_LOADING';
export const GET_PRODUCTS_CATEGORY_DETAILS_SUCCESS =
  '@@product/GET_PRODUCTS_CATEGORY_DETAILS_SUCCESS';
export const GET_PRODUCTS_CATEGORY_DETAILS_FAILURE =
  '@@product/GET_PRODUCTS_CATEGORY_DETAILS_FAILURE';

export const getProductsCategoryDetails = category => async dispatch => {
  try {
    dispatch({
      type: GET_PRODUCTS_CATEGORY_DETAILS_LOADING,
    });

    const response = await fetch(
      `https://fakestoreapi.com/products/Category/${category}`
    ).then(res => res.json());

    dispatch({
      type: GET_PRODUCTS_CATEGORY_DETAILS_SUCCESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCTS_CATEGORY_DETAILS_FAILURE,
      payload: err,
    });
  }
};
