import React from 'react';
import Styles from './productdetail.module.sass';

export const ProductDetail = ({ children, className = Styles.lc_productdetail }) => (
    <div
        className={className}
        >
        {children}
    </div>
)