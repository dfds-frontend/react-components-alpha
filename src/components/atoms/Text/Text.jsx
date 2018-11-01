import './text.scss';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getModifiersArray } from 'src/utils';

export default function Text({ children, modifiers, className }) {
    return <span className={cx('text', getModifiersArray('text', modifiers), className)}>{children}</span>;
}
