import React from 'react';
import ButtonAddProduct from '../ButtonAddProductModal/ButtonAddProductModal';
import s from './ProductsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { products, isLoadingProducts } from '../../redux/products/productsSelectors';
import ProductCard from '../ProductCard/ProductCard';
import { deleteProduct } from '../../redux/products/productsOperations';

const ProductList = () => {
  const productsList = useSelector(products);
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
      </ul>
      <ButtonAddProduct />
    </>
  );
};

export default ProductList;
