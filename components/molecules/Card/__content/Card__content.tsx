import React from 'react';
import Styles from './card__content.module.sass';

export const CardContent = ({ children, className = Styles.lc_card__content }) => (
    <div
        className={className}
        >
        {children}
    </div>
)