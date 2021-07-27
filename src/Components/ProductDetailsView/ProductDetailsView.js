import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { products } from '../../redux/products/productsSelectors';
import { getCurrentProduct } from '../../redux/products/productsOperations';
import s from './ProductDetailsView.module.css';

const ProductDetailsView = () => {
  const { productid } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentProduct(productid));
  }, [dispatch, productid]);

  const product = useSelector(state => state.products.currentProduct);

  const { imageUrl, productName, count, comments, weight, size } = product;

  return (
    <>
      {product && (
        <div className={s.productDetails}>
          <img src={imageUrl} className={s.image} alt={productName} />
          <h2>Product name: {productName}</h2>
          <ul className={s.detailsList}>
            <li className={s.detailsListElement}>Count: {count}</li>
            <li className={s.detailsListElement}>Weight: {weight}</li>
            <li className={s.detailsListElement}>Comments: {comments}</li>
            <button className={s.button}>Edit</button>
          </ul>
        </div>
      )}
    </>
  );
};

export default ProductDetailsView;
