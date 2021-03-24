import React from 'react';
import Styles from './card.module.sass';

export const Card = ({ children, className = Styles.lc_card }) => (
    <div
        className={className}
        >
        {children}
    </div>
)