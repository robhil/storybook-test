import React from 'react';
import PropTypes from 'prop-types';
import MaterialButton from '@material-ui/core/Button';

export const Button = ({ backgroundColor, label, type, objectAbc, numberLabel, ...props }) => {
  return (
    <MaterialButton
      style={{ backgroundColor }}
      color={type}
      {...props}
    >
      {label}-{numberLabel}-{objectAbc.name}
    </MaterialButton>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'default']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
  numberLabel: PropTypes.number,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  disabled: PropTypes.bool,
  objectAbc: PropTypes.shape({ name: PropTypes.string })
};

Button.defaultProps = {
  backgroundColor: null,
  label: 'Hello world',
  numberLabel: 20,
  size: 'medium',
  variant: 'contained',
  type: 'primary',
  disabled: false,
  objectAbc: { name: 'abc' }
};
