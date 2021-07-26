import s from './ProductCard.module.css';

const ProductCard = ({ productName, count, comments, imageUrl, deleteProduct }) => (
  <div className={s.productCard}>
    <div className={s.productCardImage}>
      <img className={s.productImage} src={imageUrl} alt={productName} />
    </div>
    <div className={s.productCardDescription}>
      <h3>Product name: {productName}</h3>
      <p>Count: {count}</p>
      <p>Comments: {comments}</p>
      <button onClick={deleteProduct}>Удалить</button>
    </div>
  </div>
);

export default ProductCard;
