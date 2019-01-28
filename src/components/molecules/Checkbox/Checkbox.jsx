import './checkbox.scss';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getModifiersArray } from 'src/utils';
import { Icon } from 'components';

export default function Checkbox({
  name,
  children,
  onChange,
  checked,
  disabled,
  required,
  hasError,
  errorMessage,
  className,
  modifiers,
  mod,
}) {
  return (
    <div
      className={cx(
        'checkbox',
        {
          'checkbox--error': hasError,
        },
        getModifiersArray('checkbox', mod || modifiers),
        className
      )}
    >
      <label className="checkbox__label">
        <input
          type="checkbox"
          className="checkbox__input"
          name={name}
          required={required}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <i className="checkbox__bg" />
        <Icon className="checkbox__icon" height="20" width="20" name="checkmark" />
        <p className="checkbox__text">{children}</p>
      </label>
      {hasError && errorMessage && <p className="checkbox__error-message">{errorMessage}</p>}
    </div>
  );
}
Checkbox.propTypes = {};
Checkbox.defaultProps = {};
