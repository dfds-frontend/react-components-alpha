import './radio-button.scss';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getModifiersArray } from 'src/utils';
import { Icon } from 'components';

export default function RadioButton({
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
    <div className={cx('radio-button', getModifiersArray('radio-button', mod || modifiers), className)}>{children}</div>
  );
}
RadioButton.propTypes = {};
RadioButton.defaultProps = {};
