import './radio-button.scss';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getModifiersArray, elementFactory, modifierFactory } from 'src/utils';

const BLOCK = 'radio-button';
const E = elementFactory(BLOCK);
const M = modifierFactory(BLOCK);

export default function RadioButton({ name, children, onChange, checked, disabled, value, className, modifiers, mod }) {
  return (
    <div className={cx(getModifiersArray(BLOCK, mod || modifiers), className)}>
      <label className={E('label')}>
        <input
          type="radio"
          className={E('input')}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <i className={E('bg')} />
        <i className={E('dot')} />
        <div className={E('text')}>{children}</div>
      </label>
    </div>
  );
}
RadioButton.propTypes = {};
RadioButton.defaultProps = {};
