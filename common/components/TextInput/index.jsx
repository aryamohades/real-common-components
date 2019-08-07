import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'underscore';
import style from './styles';

class Component extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.debounced && this.props.onChange) {
      this.debouncedOnChange = debounce(
        this.props.onChange,
        this.props.debounceInterval
      );
    }

    this.state = {
      currentValue: ''
    };
  }

  onChange = event => {
    const value = event.target.value;

    this.setState({ currentValue: value });

    if (this.props.onChange) {
      if (this.props.debounced) {
        this.debouncedOnChange(value);
      } else {
        this.props.onChange(value);
      }
    }
  };

  onKeyPress = event => {
    if (event.charCode === 13 && this.props.onEnterPress) {
      this.props.onEnterPress(this.state.currentValue);
    }
  };

  render() {
    const value =
      this.props.value !== null ? this.props.value : this.state.currentValue;

    return (
      <input
        type={this.props.type}
        name={this.props.name}
        value={value}
        placeholder={this.props.placeholder}
        disabled={this.props.disabled}
        autoFocus={this.props.autoFocus}
        maxLength={this.props.maxLength}
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
        className={this.props.className}
      />
    );
  }
}

const TextInput = style(Component);

TextInput.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password']),
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  onEnterPress: PropTypes.func,
  debounced: PropTypes.bool,
  debounceInterval: PropTypes.number
};

TextInput.defaultProps = {
  type: 'text',
  value: null,
  placeholder: '',
  disabled: false,
  autoFocus: false,
  debounced: false,
  debounceInterval: 300
};

export default TextInput;
