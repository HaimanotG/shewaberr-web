import React from 'react';
import Styles from './faq__faqs.module.sass';

export const FaqFaqs = ({ children, className = Styles.lc_faq__faqs }) => (
    <div
        className={className}
        >
        {children}
    </div>
)