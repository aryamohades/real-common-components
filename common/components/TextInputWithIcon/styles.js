import styled, { css } from 'styled-components';
import TextInput from '../TextInput';
import Icon from '../Icon';

const baseStyle = css`
  position: relative;

  ${TextInput} {
    padding-left: 36px;
  }

  ${Icon} {
    position: absolute;
    height: 100%;
    font-size: 16px;
    margin-left: 8px;
    pointer-events: none;
  }
`;

export default component => styled(component)`
  ${baseStyle}
`;
