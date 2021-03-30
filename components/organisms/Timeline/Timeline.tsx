import React from 'react';
import Styles from './timeline.module.sass';

export const Timeline = ({ children, className = Styles.lc_timeline }) => (
    <div
        className={className}
        >
        {children}
    </div>
)