import React from 'react';
import Styles from './testimonials.module.sass';

export const Testimonials = ({ title, children, className = Styles.lc_testimonials }) => (
    <div
        className={className}
        >
        {title}
        <div className={Styles.lc_testimonials_content}>
            {children}
        </div>
    </div>
)