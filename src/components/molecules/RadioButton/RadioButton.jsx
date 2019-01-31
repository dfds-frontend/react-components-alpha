import './radio-button.scss';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getModifiersArray, E } from 'src/utils';

const BLOCK = 'radio-button';
const e = element => E(BLOCK, element);

export default function RadioButton({ name, children, onChange, checked, disabled, value, className, modifiers, mod }) {
  return (
    <div className={cx(getModifiersArray(BLOCK, mod || modifiers), className)}>
      <label className={e('label')}>
        <input
          type="radio"
          className={e('input')}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <i className={e('bg')} />
        <i className={e('dot')} />
        <div className={e('text')}>{children}</div>
      </label>
    </div>
  );
}
RadioButton.propTypes = {};
RadioButton.defaultProps = {};
