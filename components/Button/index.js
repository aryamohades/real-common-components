import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledButton } from './styles';

const Button = ({
  children,
  icon,
  iconPosition,
  ...rest
}) => (
  <StyledButton {...rest}>
    {icon && iconPosition === 'left' && (
      <Icon icon={icon} iconPosition={iconPosition} />
    )}
    {children}
    {icon && iconPosition === 'right' && (
      <Icon icon={icon} iconPosition={iconPosition} />
    )}
  </StyledButton>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  theme: PropTypes.oneOf(['primary', 'light', 'dark', 'green', 'blue', 'red']),
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right'])
};

Button.defaultProps = {
  theme: 'light',
  iconPosition: 'left'
};

export default Button;
