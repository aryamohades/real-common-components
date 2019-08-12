import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'underscore';
import { utils, propUtils } from '../../lib';
import Icon from '../Icon';
import Label from '../Label';
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

  inputRef = createRef();

  focus = () => this.inputRef.current.focus();

  select = () => this.inputRef.current.select();

  getTabIndex = () => {
    const { disabled, tabIndex } = this.props;

    if (!utils.isNil(tabIndex)) {
      return tabIndex;
    } else if (disabled) {
      return -1;
    }
  };

  getValue = () => {
    const { value } = this.props;
    const { currentValue } = this.state;

    return utils.isNil(value) ? currentValue : value;
  };

  createLabel = position => {
    const { label, labelPosition } = this.props;

    if (labelPosition === position) {
      return Label.create(label);
    }
  };

  createButton = () => {};

  onChange = event => {
    const { debounced, onChange } = this.props;
    const { value } = event.target;

    this.setState({ currentValue: value });

    if (onChange) {
      if (debounced) {
        this.debouncedOnChange(value);
      } else {
        onChange(value);
      }
    }
  };

  onKeyPress = event => {
    const { onEnterPress, onKeyPress } = this.props;
    const { currentValue } = this.state;
    const { charCode } = event;

    if (charCode === 13 && onEnterPress) {
      onEnterPress(currentValue);
    }

    if (onKeyPress) {
      onKeyPress(charCode, currentValue);
    }
  };

  render() {
    const { className, icon } = this.props;

    return (
      <div className={className}>
        {this.createLabel('left')}
        <div>
          <input
            {...propUtils.getHtmlInputProps(this.props)}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
            ref={this.inputRef}
            tabIndex={this.getTabIndex()}
            value={this.getValue()}
          />
          {Icon.create(icon)}
        </div>
        {this.createLabel('right')}
      </div>
    );
  }
}

const TextInput = style(Component);

TextInput.propTypes = {
  autoFocus: PropTypes.bool,
  button: PropTypes.oneOf([PropTypes.node, PropTypes.object]),
  buttonPosition: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
  debounced: PropTypes.bool,
  debounceInterval: PropTypes.number,
  error: PropTypes.bool,
  fluid: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  iconPosition: PropTypes.oneOf(['left', 'right']),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  labelPosition: PropTypes.oneOf(['left', 'right']),
  maxLength: PropTypes.number,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onEnterPress: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  tabIndex: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  type: PropTypes.oneOf(['text', 'email', 'password']),
  value: PropTypes.string
};

TextInput.defaultProps = {
  buttonPosition: 'right',
  debounceInterval: 300,
  iconPosition: 'left',
  labelPosition: 'left',
  type: 'text'
};

export default TextInput;
