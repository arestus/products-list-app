import s from './ProductCrad.module.css';

const ProductCard = ({ productName, count, comments, weight, imageUrl, size: { height, width } }) => (
  <div className={s.ProductCard}>
    <img className={s.productImage} src={imageUrl} alt={productName} />
    <h2>Product name: {productName}</h2>
    <p>Count: {count}</p>
    <p>Comments: {comments}</p>
    <p>Height: {height}</p>
    <p>Width: {width}</p>
    <p>Weight: {weight}</p>
  </div>
);

export default ProductCard;
