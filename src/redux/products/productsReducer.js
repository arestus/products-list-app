import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getProductsSuccess,
  addProductSuccess,
  addProductRequest,
  addProductError,
  getProductsRequest,
  getProductsError,
  // deleteProductRequest,
  deleteProductSuccess,
  // deleteProductError,
  changeFilter,
} from './productsActions';

const products = createReducer([], {
  [getProductsSuccess]: (_, { payload }) => payload,
  [addProductSuccess]: (state, { payload }) => [...state, payload],
  [deleteProductSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

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

export default combineReducers({
  products,
  isLoadingProducts,
  filter,
});
