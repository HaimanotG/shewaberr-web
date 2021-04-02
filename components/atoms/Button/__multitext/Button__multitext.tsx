import React from 'react';
import Styles from './button__multitext.module.sass';

export const ButtonMultiText = ({ children, className = Styles.button__multitext }) => (
    <span className={className}>
        {children}
    </span>
)