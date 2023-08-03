import React from 'react';
import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selectors';
import actions from '../../redux/filter/filter-actions';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const filterChange = value => dispatch(actions.filterChange(value));
  return (
    <label>
      Find contacts by name:
      <input
        type="text"
        name="filter"
        className={s.input}
        onChange={e => filterChange(e.currentTarget.value)}
        value={filter}
      />
    </label>
  );
}

export default Filter;
