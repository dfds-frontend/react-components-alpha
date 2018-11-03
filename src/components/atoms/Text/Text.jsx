import './text.scss';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getModifiersArray } from 'src/utils';

export default function Text({ children, modifiers, mod, className }) {
  return <span className={cx('text', getModifiersArray('text', mod || modifiers), className)}>{children}</span>;
}

Text.propTypes = {
  children: PropTypes.any.isRequired,
  modifiers: PropTypes.string,
  mod: PropTypes.string,
  className: PropTypes.string,
};
