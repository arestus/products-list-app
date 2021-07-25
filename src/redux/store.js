import { configureStore } from '@reduxjs/toolkit';

import products from './products/productsReducer';
import { isAddProductModalOpen } from './isModalAddProductOpen/isModalAddProductReducer';

const store = configureStore({
  reducer: {
    products,
    isAddProductModalOpen,
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { store };
