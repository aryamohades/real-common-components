export const isNil = value => value === null || value === undefined;

export const flip = value => {
  if (value === 'left') {
    return 'right';
  } else if (value === 'right') {
    return 'left';
  } else if (value === 'top') {
    return 'bottom';
  } else if (value === 'bottom') {
    return 'top';
  }

  return value;
};
