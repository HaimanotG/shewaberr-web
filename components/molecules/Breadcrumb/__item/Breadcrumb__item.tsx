import React from 'react';
import Styles from '.breadcrumb__item.module.sass';

export const BreadcrumbItem = ({ children, className }) => (
    <div
        className={className}
        >
        {children}
    </div>
)