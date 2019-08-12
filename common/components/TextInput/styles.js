import styled, { css } from 'styled-components';
import { utils } from '../../lib';
import Icon from '../Icon';
import Label from '../Label';

const backgroundColorDisabled = '#f1f1f1';
const border = '1px solid #ccc';
const borderActiveColor = '#85b7d9';
const borderActive = `1px solid ${borderActiveColor}`;
const borderRadius = '.20rem';
const padding = '.75em 1em';
const transitionSpeed = '0.11s';

const containerStyle = css`
  display: inline-flex;
  font-size: 1em;
  position: relative;

  > div {
    display: inline-flex;
    font-size: 1em;
    position: relative;
  }
`;

const iconStyle = css`
  ${Icon} {
    align-items: center;
    display: flex;
    font-size: 1em;
    height: 100%;
    justify-content: center;
    opacity: 0.5;
    pointer-events: none;
    position: absolute;
    text-align: center;
    transition: opacity ${transitionSpeed} ease;
    width: 2.75em;

    ${({ iconPosition }) =>
      css`
        ${iconPosition}: 0;
      `}
  }

  input:focus ~ ${Icon} {
    opacity: 1;
  }
`;

const labelStyle = ({ labelPosition }) => css`
  ${Label} {
    align-items: center;
    background: #e8e8e8;
    border-radius: ${borderRadius};
    border-bottom-${utils.flip(labelPosition)}-radius: 0;
    border-top-${utils.flip(labelPosition)}-radius: 0;
    color: #777;
    display: flex;
    font-size: 1em;
    line-height: 1;
    padding: 0 .85em;
  }
`;

const inputStyle = css`
  input {
    background: #fff;
    border: ${border};
    border-radius: ${borderRadius};
    box-sizing: border-box;
    flex: 1;
    font-size: 100%;
    line-height: 1.21428571em;
    max-width: 100%;
    outline: 0;
    padding: ${padding};
    text-align: left;
    transition: border-color ${transitionSpeed} ease;
    -webkit-font-smoothing: antialiased;

    :disabled {
      background: ${backgroundColorDisabled};
      cursor: not-allowed;
    }

    :focus {
      border: ${borderActive};
    }

    ::placeholder {
      color: #ccc;
    }

    ${({ icon, iconPosition }) =>
      !utils.isNil(icon) && css`padding-${iconPosition}: 2.65em;`}

    ${({ label, labelPosition }) =>
      !utils.isNil(label) &&
      css`
        border-${labelPosition}-color: transparent;
        border-bottom-${labelPosition}-radius: 0;
        border-top-${labelPosition}-radius: 0;

        :focus {
          border-${labelPosition}-color: ${borderActiveColor};
        }
    `}
  }
`;

export default component => styled(component)`
  ${containerStyle}
  ${inputStyle}
  ${iconStyle}
  ${labelStyle}
`;
