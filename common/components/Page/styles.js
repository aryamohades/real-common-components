import { createGlobalStyle } from 'styled-components';

const backgroundColor = '#fff';
const font = '"Helvetica Neue", Helvetica, Arial, sans-serif';
const textColor = '#333';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  

  body {
    background: ${backgroundColor};
    color: ${textColor};
    font-family: ${font};
    font-size: 14px;
    line-height: 1.4285em;
    margin: 0;
    overflow-x: hidden;
    padding: 0;
  }
`;
