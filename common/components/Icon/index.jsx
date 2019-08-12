import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { utils } from '../../lib';
import style from './styles';

const Component = ({ icon, spin, ...rest }) => (
  <div {...rest}>
    <FontAwesomeIcon icon={icon} spin={spin} />
  </div>
);

const Icon = style(Component);

Icon.propTypes = {
  icon: PropTypes.string,
  spin: PropTypes.bool
};

Icon.create = options => {
  if (utils.isNil(options)) {
    return null;
  }

  if (typeof options === 'string') {
    return <Icon icon={options} />;
  }

  return <Icon {...options} />;
};

export default Icon;
