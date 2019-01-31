import './checkbox.scss';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getModifiersArray, elementFactory, modifierFactory } from 'src/utils';
import { Icon } from 'components';

const BLOCK = 'checkbox';
const E = elementFactory(BLOCK);
const M = modifierFactory(BLOCK);

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
    <div className={cx({ [M('error')]: hasError }, getModifiersArray('checkbox', mod || modifiers), className)}>
      <label className={E('label')}>
        <input
          type="checkbox"
          className={E('input')}
          name={name}
          required={required}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <i className={E('bg')} />
        <Icon className={E('icon')} height="20" width="20" name="checkmark" />
        <p className={E('text')}>{children}</p>
      </label>
      {hasError && errorMessage && <p className={E('error-message')}>{errorMessage}</p>}
    </div>
  );
}
Checkbox.propTypes = {};
Checkbox.defaultProps = {};
