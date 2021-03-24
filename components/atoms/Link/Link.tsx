import React from 'react';
import Styles from './link.module.sass';

export const Link = ({ children, href = '#', target = '', className = Styles.link }) => (
    <a
        href={href}
        target={target}
        >
        {children}
    </a>
)