import React from 'react';

const ProductDetailsView = ({
  imageUrl,
  name,
  count,
  size,
  weigh,
  comments,
}) => {
  return (
    <>
      <div>Details</div>
      <ul>
        <li>Image: {imageUrl}</li>
        <li>Product name: {name}</li>
        <li>Count: {count}</li>
        <li>Size: {size}</li>
        <li>Weight: {weigh}</li>
        <li>Comments: {comments}</li>
        <button>Edit</button>
      </ul>
    </>
  );
};

export default ProductDetailsView;
