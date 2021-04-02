import React from 'react';
import Styles from './faq__header.module.sass';

export const FaqHeader = ({ children, className = Styles.lc_faq__header }) => (
    <div
        className={className}
        >
        {children}
    </div>
)