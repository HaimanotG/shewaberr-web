import React from 'react';
import Styles from './faq__content.module.sass';

export const FaqContent = ({ children, className = Styles.lc_faq__content }) => (
    <div
        className={className}
        >
        {children}
    </div>
)