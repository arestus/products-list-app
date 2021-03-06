import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s from './ButtonAddProductModal.module.css';

import Modal from '../Modal/Modal';
import AddProductModal from '../AddProductModal';
import { modalAddProductOpen } from '../../redux/isModalAddProductOpen/isModalAddProductOpenActions';
import { onModalAddProductOpen } from '../../redux/isModalAddProductOpen/isModalAddProductOpenSelectors';

const ButtonAddProduct = () => {
  const dispatch = useDispatch();
  const onToggleModal = () => dispatch(modalAddProductOpen());

  const isModalAddProductOpen = useSelector(onModalAddProductOpen);

  return (
    <>
      <div className={s.buttonAddProductContainer}>
        <button type="button" className={s.buttonText} onClick={onToggleModal}>
          New Product
        </button>
      </div>
      {isModalAddProductOpen && (
        <Modal onClose={onToggleModal}>
          <AddProductModal onClose={onToggleModal} />
        </Modal>
      )}
    </>
  );
};

export default ButtonAddProduct;
