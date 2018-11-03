import './icon.scss';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getModifiersArray } from 'src/utils';

const Icon = ({ children, name, width, height, fill, modifiers, className }) => {
  const content = children || name;

  if (!content) {
    return null;
  }

  let url = '#' + content.trim();

  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      className={cx('icon', getModifiersArray('icon', modifiers), className)}
    >
      <use xlinkHref={url} />
    </svg>
  );
};

Icon.propTypes = {
  children: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string,
  className: PropTypes.string,
  modifiers: PropTypes.string,
};

Icon.defaultProps = {
  name: 'chevron',
  width: null,
  height: null,
  fill: 'currentColor',
  color: null,
};

export default Icon;
