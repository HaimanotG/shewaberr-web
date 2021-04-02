import React from 'react';
import Styles from './navbar__brand.module.sass';

export const NavbarBrandDesktop = ({ children, className = Styles.lc_navbar__brand_desktop }) =>(
    <div
        className={className}
        >
        {children}
    </div>
)