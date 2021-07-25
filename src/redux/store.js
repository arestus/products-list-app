import { configureStore } from '@reduxjs/toolkit';

import finance from './finance/financeReducer';

const store = configureStore({
  reducer: {
    products,
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { store };
