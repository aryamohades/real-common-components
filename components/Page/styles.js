import { createGlobalStyle } from 'styled-components';

export const font = '"Helvetica Neue", Helvetica, Arial, sans-serif';
export const bodyBackgroundColor = '#fafafa';
export const defaultTextColor = '#333';

export const BaseStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
  }

  body {
    font-family: ${font};
    color: ${defaultTextColor};
    background: ${bodyBackgroundColor};
  }
`;
