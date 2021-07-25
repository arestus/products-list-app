import { createReducer } from '@reduxjs/toolkit';
import { modalAddProductOpen } from './isModalAddProductOpenActions';

export const isAddProductModalOpen = createReducer(false, {
  [modalAddProductOpen]: (state, _) => !state,
});
