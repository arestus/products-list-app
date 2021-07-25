import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import s from './AddProductModal.module.css';
import { modalAddProductOpen } from '../../redux/isModalAddProductOpen/isModalAddProductOpenActions';

const AddProductModal = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  const dispatch = useDispatch();
  const onToggleModal = () => dispatch(modalAddProductOpen());

  //   const submitForm = async event => {
  //     event.preventDefault();

  //     await dispatch(addProduct());
  //   };

  return (
    <div className={s.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className={s.formList}>
          <li>
            Product Name: <input {...register('productName')} />
          </li>
          <li>
            Count: <input {...register('productCount')} />
          </li>
          <li>
            Size: <span>Width</span>
            <input className={s.sizes} {...register('productWidth')} />
            <span>Height</span>
            <input className={s.sizes} {...register('productHeight')} />
          </li>
          <li>
            Weight: <input {...register('productWeight')} />
          </li>
          <li>
            Commentary: <input {...register('productCommentary')} />
          </li>
        </ul>
        <button type="submit">Add</button>
        <button onClick={onToggleModal}>Cancel</button>
      </form>
    </div>
  );
};

export default AddProductModal;
