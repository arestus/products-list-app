import React from 'react';
import ButtonAddProduct from '../ButtonAddProductModal/ButtonAddProductModal';
import s from './ProductsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { isLoadingProducts, getVisibleProducts } from '../../redux/products/productsSelectors';
import ProductCard from '../ProductCard/ProductCard';
import { deleteProduct } from '../../redux/products/productsOperations';
import ProductsFilter from '../ProductsFilter';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const productsList = useSelector(getVisibleProducts);
  const isLoading = useSelector(isLoadingProducts);

  console.log(productsList);

  const dispatch = useDispatch();
  const onDeleteProduct = id => {
    const conf = window.confirm(`Are you sure?`);
    if (conf) {
      dispatch(deleteProduct(id));
    } else {
      alert(`ok you don't want to delete this`);
    }
  };

  return (
    <>
      <ul className={s.productsList}>
        {isLoading ? (
          <div>Загрузка...</div>
        ) : (
          productsList.map(({ id, productName, count, Comments, weight, imageUrl, size }) => (
            <li key={id} className={s.productListCard}>
              <Link className={s.cardLink} to={`/products/${id}`}>
                <ProductCard
                  imageUrl={imageUrl}
                  productName={productName}
                  count={count}
                  Comments={Comments}
                  size={size}
                  weight={weight}
                  // deleteProduct={() => onDeleteProduct(id)}
                />
              </Link>
              <div className={s.deleteButtonContainer}>
                <button className={s.buttonDelete} onClick={() => onDeleteProduct(id)}>
                  Удалить
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
      <div className={s.filterAndAdd}>
        <ProductsFilter />
        <ButtonAddProduct />
      </div>
    </>
  );
};

export default ProductList;
