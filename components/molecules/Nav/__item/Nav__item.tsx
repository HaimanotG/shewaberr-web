import React from 'react';
import Styles from './nav__item.module.sass';

export const NavItem = ({ children, className = Styles.lc_nav__item }) => (
    <div
        className={className}
        >
        {children}
    </div>
)