import React from 'react';
import PropTypes from 'prop-types';
import { utils } from '../../lib';
import style from './styles';

const Component = ({ children, text, ...rest }) => (
  <label {...rest}>{utils.isNil(text) ? children : text}</label>
);

const Label = style(Component);

Label.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string
};

Label.create = options => {
  if (utils.isNil(options)) {
    return null;
  }

  if (typeof options === 'string') {
    return <Label text={options} />;
  }

  return <Label {...options} />;
};

export default Label;
