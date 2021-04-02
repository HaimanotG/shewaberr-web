import React from 'react';
import Styles from './product__body.module.sass';

export const ProductBody = ({ children, className = Styles.lc_product__body }) => (
    <div
        className={className}
        >
        {children}
    </div>
)