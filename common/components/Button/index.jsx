import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import style, { availableThemes } from './styles';

const Component = ({
  small,
  medium,
  large,
  theme,
  icon,
  children,
  ...rest
}) => (
  <button {...rest}>
    {icon && <Icon icon={icon} />}
    {children && <span>{children}</span>}
  </button>
);

const Button = style(Component);

Button.propTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  theme: PropTypes.oneOf(availableThemes),
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  theme: 'light'
};

export default Button;
