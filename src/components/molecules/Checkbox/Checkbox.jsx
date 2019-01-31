import './checkbox.scss';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getModifiersArray, E, M } from 'src/utils';
import { Icon } from 'components';

const BLOCK = 'checkbox';
const e = element => E(BLOCK, element);
const m = modifier => M(BLOCK, modifier);

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
    <div className={cx({ [m('error')]: hasError }, getModifiersArray('checkbox', mod || modifiers), className)}>
      <label className={e('label')}>
        <input
          type="checkbox"
          className={e('input')}
          name={name}
          required={required}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <i className={e('bg')} />
        <Icon className={e('icon')} height="20" width="20" name="checkmark" />
        <p className={e('text')}>{children}</p>
      </label>
      {hasError && errorMessage && <p className={e('error-message')}>{errorMessage}</p>}
    </div>
  );
}
Checkbox.propTypes = {};
Checkbox.defaultProps = {};
