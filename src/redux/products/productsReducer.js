import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getProductsSuccess,
  addProductSuccess,
  addProductRequest,
  addProductError,
  getProductsRequest,
  getProductsError,
  deleteProductSuccess,
  getCurrentProductSuccess,
  changeFilter,
  changeSelect,
} from './productsActions';

const products = createReducer([], {
  [getProductsSuccess]: (_, { payload }) => payload,
  [addProductSuccess]: (state, { payload }) => [...state, payload],
  [deleteProductSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const currentProduct = createReducer(
  {},
  {
    [getCurrentProductSuccess]: (_, { payload }) => payload,
  },
);
const isLoadingProducts = createReducer(true, {
  [getProductsSuccess]: () => false,
  [getProductsRequest]: () => true,
  [getProductsError]: () => false,
  [addProductRequest]: () => true,
  [addProductSuccess]: () => false,
  [addProductError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const select = createReducer('productName', {
  [changeSelect]: (_, { payload }) => payload,
});

export default combineReducers({
  products,
  isLoadingProducts,
  filter,
  select,
  currentProduct,
});
