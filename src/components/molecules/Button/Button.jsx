import './button.scss';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getModifiersArray, elementFactory, modifierFactory } from 'src/utils';

export default function Button({ children, onClick, disabled, className, modifiers, mod, type }) {
  return (
    <button
      className={cx(getModifiersArray('button', mod || modifiers), className)}
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
  mod: PropTypes.string,
};
Button.defaultProps = {
  className: '',
  type: 'button',
};
