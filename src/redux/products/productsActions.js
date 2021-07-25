import { createAction } from '@reduxjs/toolkit';

const deleteProductRequest = createAction('products/deleteProductRequest');
const deleteProductSuccess = createAction('products/deleteProductSuccess');
const deleteProductError = createAction('products/deleteProductError');

const addProductRequest = createAction('products/addProductRequest');
const addProductSuccess = createAction('products/addProductSuccess');
const addProductError = createAction('products/addProductError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  addProductRequest,
  addProductSuccess,
  addProductError,
};
