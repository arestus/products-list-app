import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getProductsSuccess,
  addProductSuccess,
  addProductRequest,
  addProductError,
  getProductsRequest,
  getProductsError,
} from './productsActions';

const products = createReducer([], {
  [getProductsSuccess]: (_, { payload }) => payload,
  [addProductSuccess]: (state, { payload }) => [...state, payload],
});

const isLoadingProducts = createReducer(true, {
  [getProductsSuccess]: () => false,
  [getProductsRequest]: () => true,
  [getProductsError]: () => false,
  [addProductRequest]: () => true,
  [addProductSuccess]: () => false,
  [addProductError]: () => false,
});

export default combineReducers({
  products,
  isLoadingProducts,
});
