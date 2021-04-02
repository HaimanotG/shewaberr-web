import React from 'react';
import Styles from './badge.module.sass';

export const Badge = ({ children, className = Styles.lc_badge }) => (
    <span className={className}>
        {children}
    </span>
)