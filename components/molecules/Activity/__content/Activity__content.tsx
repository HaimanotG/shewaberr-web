import React from 'react';
import Styles from './activity__content.module.sass';

export const ActivityContent = ({ children, className = Styles.lc_activity__content }) => (
    <div
        className={className}
        >
        {children}
    </div>
)