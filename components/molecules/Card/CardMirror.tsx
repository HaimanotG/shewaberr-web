import React from 'react';
import Styles from './cardmirror.module.sass';

export const CardMirror = ({ children, className = Styles.lc_cardmirror }) => (
    <div
        className={className}
        >
        {children}
    </div>
)