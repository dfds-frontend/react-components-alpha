import './button.scss';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getModifiersArray } from 'src/utils';

export default function Button({ children, onClick, disabled, className, modifiers, type, icon }) {
  return (
    <button
      className={cx(
        'button',
        getModifiersArray('button', modifiers),
        {
          'button--with-icon': !!icon,
        },
        className
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <div className="button__text">{children}</div> {icon}
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  modifiers: PropTypes.string,
  icon: PropTypes.any,
};
Button.defaultProps = {
  className: '',
  modifiers: '',
  type: 'button',
};
