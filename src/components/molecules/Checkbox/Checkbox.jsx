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
  className,
  modifiers,
  mod,
}) {
  return (
    <label
      className={cx(
        'checkbox',
        {
          'checkbox--error': hasError,
        },
        getModifiersArray('checkbox', mod || modifiers),
        className
      )}
    >
      <input
        type="checkbox"
        className="checkbox__input"
        name={name}
        required={required}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <i className={cx('checkbox__bg', { 'checkbox__bg--checked': checked })} />
      <Icon
        className={cx('checkbox__icon', { 'checkbox__icon--checked': checked })}
        height="20"
        width="20"
        name="checkmark"
      />
      <p className="checkbox__text">{children}</p>
    </label>
  );
}
Checkbox.propTypes = {};
Checkbox.defaultProps = {};
