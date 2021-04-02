import React from 'react';
import Styles from './breadcrumb.module.sass';

export const Breadcrumb = ({ children, className = Styles.breadcrumb }) => (
    <div
        className={className}
        >
        {children}
    </div>
)