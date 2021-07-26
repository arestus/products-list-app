import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import s from './AddProductModal.module.css';
import { modalAddProductOpen } from '../../redux/isModalAddProductOpen/isModalAddProductOpenActions';
import firebase from '../../firebase';
import { v4 as uuidv4 } from 'uuid';

const AddProductModal = () => {
  const ref = firebase.firestore().collection('products');
  const addProduct = newProduct => {
    ref
      .doc(newProduct.id)
      .set(newProduct)
      .catch(e => {
        console.log(e);
      });
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = ({ productName, count, weight, comments, imageUrl, size }) =>
    addProduct({
      productName,
      count,
      size,
      weight,
      comments,
      imageUrl,
      id: uuidv4(),
    });

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
