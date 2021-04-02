import React from 'react';
import Styles from './button__multitext__secondary.module.sass';

export const ButtonMultiTextSecondary = ({ children, className = Styles.button__multitext__secondary }) => (
    <span className={className}>
        {children}
    </span>
)