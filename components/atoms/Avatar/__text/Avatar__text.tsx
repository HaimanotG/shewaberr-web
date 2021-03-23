import React from 'react';
import Styles from './avatar__text.module.sass';

export const AvatarText = ({ children, className = Styles.avatar__text }) => (
    <span
        className={className}
        >
        {children}
    </span>
)