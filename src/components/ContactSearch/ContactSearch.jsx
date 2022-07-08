import React from 'react';
import { changeFilter } from '../../redux/contacts/contacts-reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ContactSearch = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };
  return (
    <label>
      Find contacts by name
      <br />
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default ContactSearch;
