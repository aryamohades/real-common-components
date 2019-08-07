import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import TextInput from '../TextInput';
import style from './styles';

const Component = ({ icon, className, ...rest }) => (
  <div className={className}>
    <Icon icon={icon} />
    <TextInput {...rest} />
  </div>
);

const TextInputWithIcon = style(Component);

TextInputWithIcon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default TextInputWithIcon;
