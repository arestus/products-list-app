import { getProductsSuccess, getProductsError, getProductsRequest } from './productsActions';
import axios from 'axios';

axios.defaults.baseURL = 'https://60fe439025741100170784e9.mockapi.io/api/v1/';

export const getProducts = () => async dispatch => {
  dispatch(getProductsRequest());
  try {
    const { data } = await axios.get('/products');
    dispatch(getProductsSuccess(data));
  } catch (error) {
    dispatch(getProductsError(error.message));
  }
};
