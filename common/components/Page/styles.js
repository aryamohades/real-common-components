import { createGlobalStyle } from 'styled-components';

const font = '"Helvetica Neue", Helvetica, Arial, sans-serif';
const textColor = '#333';
const backgroundColor = '#fafafa';

export default createGlobalStyle`
  html,
  body {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${font};
    color: ${textColor};
    background: ${backgroundColor};
  }
`;
