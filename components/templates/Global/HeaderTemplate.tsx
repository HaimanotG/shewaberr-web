import React from 'react';
import Styles from './header.module.sass';

export const HeaderTemplate = ({ children, className = Styles.lc_header }) => (
    <div
        className={className}
        >
        {children}
    </div>
)