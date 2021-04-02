import React from 'react';
import Styles from './button__multitext__primary.module.sass';

export const ButtonMultiTextPriamry = ({ children, className = Styles.button__multitext__secondary }) => (
    <span className={className}>
        {children}
    </span>
)