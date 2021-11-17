import React from 'react';
import PropTypes from 'prop-types';

import '../styles/customButton.scss';

const CustomButton = ({ children }) => (
  <button type="submit" className='custom-button'>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomButton;
