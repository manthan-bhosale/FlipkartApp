export const GET_CATEGORY_LIST_LOADING = '@@category/GET_CATEGORY_LIST_LOADING';
export const GET_CATEGORY_LIST_SUCCESS = '@@category/GET_CATEGORY_LIST_SUCCESS';
export const GET_CATEGORY_LIST_FAILURE = '@@category/GET_CATEGORY_LIST_FAILURE';

export const getCategoryList = () => async dispatch => {
  try {
    dispatch({
      type: GET_CATEGORY_LIST_LOADING,
    });

    const navData = [
      {
        url: 'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/4344fd3c296d233a.png?q=100',
        text: 'Top Offers',
      },
      {
        url: 'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/ab4eb7c9d2f6c4df.png?q=100',
        text: 'Mobile & Tablets',
      },
      {
        url: 'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/a1e3b4c041823d12.png?q=100',
        text: 'Electronics',
      },
      {
        url: 'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/5fdd40bb1b4f1ab9.png?q=100',
        text: 'TVs & Appliances',
      },
      {
        url: 'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/d0e73939aba7e8ac.png?q=100',
        text: 'Fashion',
      },
      {
        url: 'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/30908d3ff8d0d128.png?q=100',
        text: 'Beauty',
      },
      {
        url: 'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/4e71a3ed70edc5c6.png?q=100',
        text: 'Home & Kitchen',
      },
      {
        url: 'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/296bda61dc97f8d7.png?q=100',
        text: 'Furniture',
      },
      {
        url: 'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/b6c5ae5af0a42bdc.png?q=100',
        text: 'Flight',
      },
      {
        url: 'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/82381f08620a3676.png?q=100',
        text: 'Grocery',
      },
    ];

    dispatch({
      type: GET_CATEGORY_LIST_SUCCESS,
      payload: navData,
    });
  } catch (err) {
    dispatch({
      type: GET_CATEGORY_LIST_FAILURE,
      payload: err,
    });
  }
};
