import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import s from './AddProductModal.module.css';
import { modalAddProductOpen } from '../../redux/isModalAddProductOpen/isModalAddProductOpenActions';
import { addProduct } from '../../redux/products/productsOperations';

const AddProductModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    e.preventDefault();

    await dispatch(addProduct(data));
  };

  const dispatch = useDispatch();
  const onToggleModal = () => dispatch(modalAddProductOpen());

  return (
    <div className={s.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.formList}>
          <div className={s.formElement}>
            <label className={s.formInputName}>Image URL:</label>
            <input {...register('imageUrl', { required: true })} />
            {errors.imageUrl ? <p>Добавьте ссылку на изображение</p> : <p></p>}
          </div>
          <div className={s.formElement}>
            <label>Product Name:</label>
            <input
              {...register('productName', {
                required: 'Укажите название товара',
                minLength: {
                  value: 3,
                  message: 'Название должно быть длинне 2 символов',
                },
                maxLength: {
                  value: 20,
                  message: 'Название должно быть не длиннее 20 символов',
                },
              })}
            />
            {errors.productName ? <p>{errors.productName.message}</p> : <p></p>}
          </div>
          <div className={s.formElement}>
            <label>Count:</label> <input {...register('count', { required: true, min: 1 })} />
            {errors.count ? <p>Должен быть хотя бы 1 товар</p> : <p></p>}
          </div>
          <div className={s.formElement}>
            <label>Height:</label> <input {...register('size.height', { required: 'Укажите высоту товара' })} />
          </div>
          <div className={s.formElement}>
            <label>Width:</label> <input {...register('size.width', { required: true, min: 10, max: 500 })} />
          </div>
          <div className={s.formElement}>
            <label>Weight:</label> <input {...register('weight', { required: 'Укажите вес товара' })} />
            {errors.weight ? <p>{errors.weight.message}</p> : <p></p>}
          </div>
        </div>
        <div className={s.formButtons}>
          <button className={s.formButtonAdd} type="submit">
            Add
          </button>
          <button className={s.formButtonCancel} onClick={onToggleModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductModal;
