import { createSelector } from '@reduxjs/toolkit';

export const products = state => state.products?.products;
export const isLoadingProducts = state => state.products?.isLoadingProducts;
export const getFilter = state => state.products.filter;

export const getVisibleProducts = createSelector([products, getFilter], (products, filter) => {
  console.log('Составляю новый массив видимых туду');
  const normalizedFilter = filter.toLowerCase();

  return products.filter(({ description }) => description.toLowerCase().includes(normalizedFilter));
});
