import React from 'react';
import Styles from './typography.module.sass';

export const Typography = ({ children, className = Styles.lc_typography }) => (
    <span
        className={className}
        >
        {children}
    </span>
)