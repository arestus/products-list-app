import React, { useEffect } from 'react';
import ButtonAddProduct from '../ButtonAddProductModal/ButtonAddProductModal';
import s from './ProductsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { products } from '../../redux/products/productsSelectors';
import ProductCard from '../ProductCard/ProductCard';
import { getProducts } from '../../redux/products/productsOperations';

const ProductList = () => {
  const productsList = useSelector(products);
  console.log(productsList);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getProducts()), [dispatch]);

  return (
    <>
      <ul className={s.productsList}>
        {productsList.map(({ id, productName, count, comments, weight, imageUrl, size }) => (
          <li key={id}>
            <ProductCard
              imageUrl={imageUrl}
              productName={productName}
              count={count}
              comments={comments}
              size={size}
              weight={weight}
            />
          </li>
        ))}
      </ul>
      <ButtonAddProduct />
    </>
  );
};

export default ProductList;
