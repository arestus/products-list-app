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

  const { imageUrl, productName, size, count, comments, weight } = product;

  return (
    <>
      {product && (
        <>
          <div>Details</div>
          <img src={imageUrl} className={s.image} alt={productName} />
          <ul className={s.detailsList}>
            <li>Product name: {productName}</li>
            <li>Count: {count}</li>
            {/* <li>Size: {height}</li> */}
            {/* <li>Size: {width}</li> */}
            <li>Weight: {weight}</li>
            <li>Comments: {comments}</li>
            <button>Edit</button>
          </ul>
        </>
      )}
    </>
  );
};

export default ProductDetailsView;
