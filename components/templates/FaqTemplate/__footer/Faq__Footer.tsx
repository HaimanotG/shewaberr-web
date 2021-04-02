import React from 'react';
import Styles from './faq__footer.module.sass';

export const FaqFooter = ({ children, className = Styles.lc_faq__footer }) => (
    <div
        className={className}
        >
        {children}
    </div>
)