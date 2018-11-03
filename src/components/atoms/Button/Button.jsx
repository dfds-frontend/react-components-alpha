import './button.scss';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getModifiersArray } from 'src/utils';

export default function Button({ children, onClick, disabled, className, modifiers, type }) {
  return (
    <button
      className={cx('button', getModifiersArray('button', modifiers), className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  modifiers: PropTypes.string,
};
Button.defaultProps = {
  className: '',
  modifiers: '',
  type: 'button',
};
