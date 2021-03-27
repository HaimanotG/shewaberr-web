import React from 'react';
import Styles from './nav.module.sass';

export const Nav = ({ children, className = Styles.lc_nav }) => (
    <div
        className={className}
        >
        {children}
    </div>
)