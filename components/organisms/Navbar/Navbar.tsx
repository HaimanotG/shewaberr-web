import React from 'react';
import Styles from './navbar.module.sass';

export const Navbar = ({ children, className = Styles.lc_navbar}) => (
    <div
        className={className}
        >
        {children}
    </div>
)