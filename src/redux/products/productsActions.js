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

export const getCurrentProductRequest = createAction('products/getCurrentProductRequest');
export const getCurrentProductSuccess = createAction('products/getCurrentProductSuccess');
export const getCurrentProductError = createAction('products/getCurrentProductError');

export const changeFilter = createAction('products/changeFilter');
export const changeSelect = createAction('products/changeSelect');

// eslint-disable-next-line import/no-anonymous-default-export
