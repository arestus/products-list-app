import { createSelector } from '@reduxjs/toolkit';

export const products = state => state.products?.products;
export const isLoadingProducts = state => state.products?.isLoadingProducts;
export const getFilter = state => state.products?.filter;
export const getSelect = state => state.products?.select;

export const getVisibleProducts = createSelector([products, getFilter, getSelect], (products, filter, getSelect) => {
  const normalizedFilter = filter.toLowerCase();
  const result =
    getSelect === 'count'
      ? products.filter(({ count }) => count.includes(normalizedFilter))
      : products.filter(({ productName }) => productName.toLowerCase().includes(normalizedFilter));
  return result;
});
