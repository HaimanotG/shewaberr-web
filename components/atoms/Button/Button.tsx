import React from 'react';
import IButtonProps from 'components/atoms/Button/IButtonProps';
import styles from './button.module.sass';

export const Button : React.SFC<IButtonProps> = ({ children, className = styles.button }) => (
    <button
        className={className}
        >
        {children}
    </button>
)
