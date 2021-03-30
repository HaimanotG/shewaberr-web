import React from 'react';
import Styles from './search__right.module.sass';

export const SearchRight = ({ children, className = Styles.lc_search__right }) => (
    <div
        className={className}
        >
        {children}
    </div>
)