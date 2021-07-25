import React from 'react';
import ButtonAddProduct from '../ButtonAddProductModal/ButtonAddProductModal';
import AddProductModal from '../AddProductModal';
import s from './ProductsList.module.css';

const ProductList = () => {
  return (
    <>
      <div className={s.container}>
        Home
        <ButtonAddProduct />
        {/* <AddProductModal /> */}
      </div>
    </>
  );
};

export default ProductList;
