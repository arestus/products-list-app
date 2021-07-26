import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { getProductsSuccess } from './productsActions';

const products = createReducer([], {
  [getProductsSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  products,
});
