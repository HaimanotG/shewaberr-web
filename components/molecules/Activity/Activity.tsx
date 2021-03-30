import React from 'react';
import Styles from './activity.module.sass';

export const Activity = ({ children, className = Styles.lc_activity }) => (
    <div
        className={className}
        >
        {children}
    </div>
)