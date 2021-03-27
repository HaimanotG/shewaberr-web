import React from 'react';
import Styles from './navbar__content.module.sass';

export const NavbarContent = ({ children, className = Styles.lc_navbar__content }) => (
    <div
        className={className}
        >
        {children}
    </div>
)