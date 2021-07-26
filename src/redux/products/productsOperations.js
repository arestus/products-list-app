import {
  getProductsSuccess,
  getProductsError,
  getProductsRequest,
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
} from './productsActions';
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

export const addProduct = product => async dispatch => {
  dispatch(addProductRequest());

  try {
    const { data } = await axios.post('/products', product);
    dispatch(addProductSuccess(data));
  } catch (error) {
    dispatch(addProductError(error.message));
  }
};

export const deleteProduct = id => async dispatch => {
  dispatch(deleteProductRequest());

  try {
    await axios.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductError(error.message));
  }
};
