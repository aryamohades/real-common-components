import styled, { css } from 'styled-components';

export const font = '"Helvetica Neue", Helvetica, Arial, sans-serif';
export const border = '1px solid transparent';
export const borderRadius = '3px';
export const colorDisabled = '#e3e3e3';
export const textColorDisabled = '#a5acb0';
export const shadowColorDisabled = '#d6dadc';

export const sizes = {
  small: {
    fontSize: '14px',
    padding: '10px 16px'
  },
  medium: {
    fontSize: '16px',
    padding: '12px 20px'
  },
  large: {
    fontSize: '20px',
    padding: '14px 24px'
  }
};

export const colors = {
  primary: {
    color: '#0079be',
    colorHover: '#016aa7',
    colorActive: '#055a8c',
    textColor: '#fff',
    textColorHover: '#fff',
    textColorActive: '#fff',
    shadowColor: '#026aa7',
    shadowColorHover: '#055a8c',
    shadowColorActive: '#055a8c'
  },
  red: {
    color: '#eb5a46',
    colorHover: '#cf513d',
    colorActive: '#933b27',
    textColor: '#fff',
    textColorHover: '#fff',
    textColorActive: '#fff',
    shadowColor: '#b04632',
    shadowColorHover: '#933b27',
    shadowColorActive: '#933b27'
  },
  blue: {
    color: '#0079be',
    colorHover: '#016aa7',
    colorActive: '#055a8c',
    textColor: '#fff',
    textColorHover: '#fff',
    textColorActive: '#fff',
    shadowColor: '#026aa7',
    shadowColorHover: '#055a8c',
    shadowColorActive: '#055a8c'
  },
  green: {
    color: '#5aac44',
    colorHover: '#519839',
    colorActive: '#49852e',
    textColor: '#fff',
    textColorHover: '#fff',
    textColorActive: '#fff',
    shadowColor: '#519839',
    shadowColorHover: '#49852e',
    shadowColorActive: '#49852e'
  },
  dark: {
    color: '#4d4d4d',
    colorHover: '#3a3a3a',
    colorActive: '#232323',
    textColor: '#fff',
    textColorHover: '#fff',
    textColorActive: '#fff',
    shadowColor: '#3a3a3a',
    shadowColorHover: '#232323',
    shadowColorActive: '#232323'
  },
  light: {
    color: '#e2e4e6',
    colorHover: '#d6dadc',
    colorActive: '#838c91',
    textColor: '#333',
    textColorHover: '#333',
    textColorActive: '#fff',
    shadowColor: '#d6dadc',
    shadowColorHover: '#838c91',
    shadowColorActive: '#838c91'
  }
};

const addButtonSize = ({ small, medium, large }) => {
  let size = 'medium';

  if (large) {
    size = 'large';
  } else if (medium) {
    size = 'medium';
  } else if (small) {
    size = 'small';
  }

  return css`
    font-size: ${sizes[size].fontSize};
    padding: ${sizes[size].padding};
  `;
};

const addButtonTheme = ({ theme, disabled }) =>
  !disabled &&
  colors[theme] &&
  css`
    background: ${colors[theme].color};
    color: ${colors[theme].textColor};
    box-shadow: 0 2px ${colors[theme].shadowColor};

    &:hover {
      background: ${colors[theme].colorHover};
      color: ${colors[theme].textColorHover};
      box-shadow: 0 2px ${colors[theme].shadowColorHover};
    }

    &:active {
      background: ${colors[theme].colorActive};
      color: ${colors[theme].textColorActive};
      box-shadow: 0 2px ${colors[theme].shadowColorActive};
    }
  `;

export const StyledButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  text-decoration: none;
  font-weight: bold;
  border-radius: ${borderRadius};
  font-family: ${font};
  border: ${border};

  &:disabled {
    cursor: not-allowed;
    background: ${colorDisabled};
    color: ${textColorDisabled};
    box-shadow: 0 2px ${shadowColorDisabled};
  }

  ${addButtonSize}
  ${addButtonTheme}
`;
