import React from 'react';
import Styles from './avatarwrapper.module.sass';

export const AvatarWrapper = ({ children, className = Styles.avatarwrapper }) => (
    <div
        className={className}
        >
        {children}
    </div>
)