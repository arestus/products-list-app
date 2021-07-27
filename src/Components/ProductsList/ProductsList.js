import React from 'react';
import ButtonAddProduct from '../ButtonAddProductModal/ButtonAddProductModal';
import s from './ProductsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { isLoadingProducts, getVisibleProducts } from '../../redux/products/productsSelectors';
import ProductCard from '../ProductCard/ProductCard';
import { deleteProduct } from '../../redux/products/productsOperations';
import ProductsFilter from '../ProductsFilter';

const ProductList = () => {
  const productsList = useSelector(getVisibleProducts);
  const isLoading = useSelector(isLoadingProducts);

  const dispatch = useDispatch();

  const onDeleteProduct = id => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <ul className={s.productsList}>
        {isLoading ? (
          <div>Загрузка...</div>
        ) : (
          productsList.map(({ id, productName, count, comments, weight, imageUrl, size }) => (
            <li key={id}>
              <ProductCard
                imageUrl={imageUrl}
                productName={productName}
                count={count}
                comments={comments}
                size={size}
                weight={weight}
                deleteProduct={() => onDeleteProduct(id)}
              />
            </li>
          ))
        )}
        <ProductsFilter />
        <ButtonAddProduct />
      </ul>
    </>
  );
};

export default ProductList;
