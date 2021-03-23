import React from 'react';
import INavbar from 'components/molecules/Navbar/INavbarProps';
import Styles from './navbar.module.sass';

export const Navbar : React.SFC<INavbar> = ({ children, className = Styles.navbar }) => (
    <nav
        className={className}
        >
        {children}
    </nav>
)