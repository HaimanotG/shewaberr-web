import React from 'react';
import IAvatar from 'components/atoms/Avatar/Avatar';
import styles from './avatar.module.sass';

export const Button : React.SFC<IButtonProps> = ({ children, className = styles.avatar }) => (
    <button
        className={className}
        >
        {children}
    </button>
)
