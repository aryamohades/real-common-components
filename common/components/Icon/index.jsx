import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './styles';

const Component = ({ icon, ...rest }) => (
  <FontAwesomeIcon icon={icon} {...rest} />
);

const Icon = style(Component);

Icon.propTypes = {
  icon: PropTypes.string
};

export default Icon;
