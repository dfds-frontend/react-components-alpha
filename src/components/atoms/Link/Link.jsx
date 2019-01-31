import './link.scss';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getModifiersArray } from 'src/utils';

export default function Link({ href, children, target, modifiers, mod, className }) {
  let rel = null;
  if (target === '_blank') {
    rel = 'noopener noreferrer';
  }

  return (
    <a href={href} target={target} rel={rel} className={cx(getModifiersArray('link', mod || modifiers), className)}>
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  modifiers: PropTypes.string,
  mod: PropTypes.string,
  className: PropTypes.string,
};

Link.defaultProps = {
  target: null,
};
