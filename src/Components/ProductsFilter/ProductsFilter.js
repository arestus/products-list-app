import React from 'react';
import s from './ProductsFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/products/productsActions';
import { getFilter } from '../../redux/products/productsSelectors';

export default function TodoFilter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <div className={s.productFilter}>
      <p className={s.productFilterLabel}>Фильтр по содержимому</p>
      <input type="text" className={s.productFilterInput} value={value} onChange={onChange} />
    </div>
  );
}
