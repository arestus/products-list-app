import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import s from './AddProductModal.module.css';
import { modalAddProductOpen } from '../../redux/isModalAddProductOpen/isModalAddProductOpenActions';
import { addProduct } from '../../redux/products/productsOperations';
// import { v4 as uuidv4 } from 'uuid';

const AddProductModal = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data, e) => {
    // e.preventDefault();
    await dispatch(addProduct(data));
  };

  const dispatch = useDispatch();
  const onToggleModal = () => dispatch(modalAddProductOpen());

  return (
    <div className={s.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className={s.formList}>
          <li>
            imageUrl: <input {...register('imageUrl')} />
          </li>
          <li>
            Product Name: <input {...register('productName')} />
          </li>
          <li>
            Count: <input {...register('count')} />
          </li>
          <li>
            Size: height <input {...register('size.height')} />
            width <input {...register('size.width')} />
          </li>
          <li>
            Weight: <input {...register('weight')} />
          </li>
          <li>
            Commentary: <input {...register('comments')} />
          </li>
        </ul>
        <button type="submit">Add</button>
        <button onClick={onToggleModal}>Cancel</button>
      </form>
    </div>
  );
};

export default AddProductModal;
