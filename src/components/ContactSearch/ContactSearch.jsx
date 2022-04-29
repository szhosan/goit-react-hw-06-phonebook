import React from 'react';
import PropTypes from 'prop-types';

const ContactSearch = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <br />
    <input type="text" value={value} onChange={onChange} />
  </label>
);

ContactSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactSearch;
