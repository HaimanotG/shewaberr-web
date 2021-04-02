import React from 'react';
import Styles from './product.module.sass';

export const Product = ({ children, className = Styles.lc_product }) => (
    <div
        className={className}
        >
        {children}
    </div>
)