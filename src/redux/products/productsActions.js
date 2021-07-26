import { createAction } from '@reduxjs/toolkit';

export const getProductsRequest = createAction('products/getProductsRequest');
export const getProductsSuccess = createAction('products/getProductsSuccess');
export const getProductsError = createAction('products/getProductsError');

export const deleteProductRequest = createAction('products/deleteProductRequest');
export const deleteProductSuccess = createAction('products/deleteProductSuccess');
export const deleteProductError = createAction('products/deleteProductError');

export const addProductRequest = createAction('products/addProductRequest');
export const addProductSuccess = createAction('products/addProductSuccess');
export const addProductError = createAction('products/addProductError');

// eslint-disable-next-line import/no-anonymous-default-export
