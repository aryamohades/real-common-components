import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ iconPosition, ...rest }) => {
  let iconStyle;

  if (iconPosition === 'left') {
    iconStyle = { marginRight: '6px' };
  } else if (iconPosition === 'right') {
    iconStyle = { marginLeft: '6px' };
  }

  return <FontAwesomeIcon style={iconStyle} {...rest} />;
};

Icon.propTypes = {
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right'])
};

export default Icon;
