import React, { useEffect, useState } from 'react';
import ButtonAddProduct from '../ButtonAddProductModal/ButtonAddProductModal';
import s from './ProductsList.module.css';
import firebase from '../../firebase';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection('products');
  useEffect(() => {
    function getProducts() {
      setLoading(true);
      ref.get().then(item => {
        const items = item.docs.map(doc => doc.data());
        setProducts(items);
        setLoading(false);
      });
    }

    getProducts();
  }, []);

  function deleteProduct(product) {
    ref
      .doc(product.id)
      .delete()
      .catch(err => {
        console.error(err);
      });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <ul className={s.productsList}>
        {products.map(({ id, productName, count, comments, weight, imageUrl, size }) => (
          <li key={id}>
            <ProductCard
              imageUrl={imageUrl}
              productName={productName}
              count={count}
              comments={comments}
              size={size}
              weight={weight}
              deleteProduct={deleteProduct}
            />
          </li>
        ))}
      </ul>
      <ButtonAddProduct />
    </>
  );
};

export default ProductList;
