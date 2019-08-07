import styled, { css } from 'styled-components';

const border = '1px solid #ccc';
const borderActive = '1px solid blue';
const backgroundColorDisabled = '#f1f1f1';

const baseStyle = css`
  border: ${border};
  padding: 0.8rem;
  font-size: 16px;
  outline: none;
  background: white;
  box-sizing: border-box;
  transition: border-color 0.22s ease;
  -webkit-font-smoothing: antialiased;

  :focus {
    border: ${borderActive};
  }

  :disabled {
    background: ${backgroundColorDisabled};
    cursor: not-allowed;
  }

  ::placeholder {
    color: #ccc;
  }
`;

export default component => styled(component)`
  ${baseStyle}
`;
