import React from 'react';
import Styles from './activity__image.module.sass';

export const ActivityImage = ({ children, className = Styles.lc_activity__image }) => (
    <div
        className={className}
        >
        {children}
    </div>
)