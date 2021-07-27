import React from 'react';
import s from './ProductsFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, changeSelect } from '../../redux/products/productsActions';
import { getFilter, getSelect } from '../../redux/products/productsSelectors';

export default function TodoFilter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const name = useSelector(getSelect);

  const onChangeInput = e => dispatch(changeFilter(e.target.value));
  const onChangeSelect = e => dispatch(changeSelect(e.target.value));

  return (
    <div className={s.productFilter}>
      <p className={s.productFilterLabel}>Фильтр по содержимому</p>
      <div className={s.filterWrapper}>
        <input type="text" className={s.productFilterInput} name={name} value={value} onChange={onChangeInput} />
        <select onChange={onChangeSelect}>
          <option value="productName">Product Name</option>
          <option value="count">Count</option>
        </select>
      </div>
    </div>
  );
}
