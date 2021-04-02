import React from 'react';
import Styles from './faq.module.sass';

export const Faq = ({ children, className = Styles.lc_faq }) => (
    <div
        className={className}
        >
        {children}
    </div>
)