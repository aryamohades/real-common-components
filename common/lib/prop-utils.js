export const htmlInputProps = [
  'autoFocus',
  'disabled',
  'maxLength',
  'name',
  'onBlur',
  'placeholder',
  'type'
];

export const getHtmlInputProps = props =>
  htmlInputProps.reduce((acc, prop) => {
    if (props[prop] !== undefined) {
      acc[prop] = props[prop];
    }

    return acc;
  }, {});
