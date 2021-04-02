import React from 'react';
import Styles from './faq__title.module.sass';

export const FaqTitle = ({ children, className = Styles.lc_faq__title }) => (
    <div
        className={className}
        >
        {children}
    </div>
)