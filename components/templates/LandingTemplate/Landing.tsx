import React from 'react';
import Styles from './landing.module.sass';

export const Landing = ({ children, className = Styles.lc_landing }) => (
    <div
        className={className}
        >
        {children}
    </div>
)