import './radio-button.scss';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getModifiersArray } from 'src/utils';

export default function RadioButton({ name, children, onChange, checked, disabled, value, className, modifiers, mod }) {
  return (
    <div className={cx('radio-button', getModifiersArray('radio-button', mod || modifiers), className)}>
      <label className="radio-button__label">
        <input
          type="radio"
          className="radio-button__input"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <i className="radio-button__bg" />
        <i className="radio-button__dot" />
        <div className="radio-button__text">{children}</div>
      </label>
    </div>
  );
}
RadioButton.propTypes = {};
RadioButton.defaultProps = {};
