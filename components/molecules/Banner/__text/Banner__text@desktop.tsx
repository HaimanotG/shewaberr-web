import React from 'react';
import Styles from './banner__text@desktop.module.sass';

export const BannerTextDesktop = ({ children, className }) => (
    <span
        className={className}
        >
        {children}
    </span>
)