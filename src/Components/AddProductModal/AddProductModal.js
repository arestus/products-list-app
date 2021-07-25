import React from 'react';
import { useForm } from 'react-hook-form';
import s from './AddProductModal.module.css';

const AddProductModal = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className={s.formList}>
          <li>
            <p>Name</p>
            <input {...register('productName')} />
          </li>
          <li>
            <p>Count</p>
            <input {...register('productCount')} />
          </li>
          <li>
            <p>Size</p>
            <span>Width</span>
            <input className={s.sizes} {...register('productWidth')} />
            <span>Height</span>
            <input className={s.sizes} {...register('productHeight')} />
          </li>
          <li>
            <p>Weight</p>
            <input {...register('productWeight')} />
          </li>
          <li>
            <p>Commentary</p>
            <input {...register('productCommentary')} />
          </li>
        </ul>
        <button type="submit">Add</button>
        <button>Cancel</button>
      </form>
    </div>
  );
};

export default AddProductModal;
