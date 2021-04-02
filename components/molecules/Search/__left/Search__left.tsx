import React from 'react';
import Styles from './search__left.module.sass';

export const SearchLeft = ({ children, className = Styles.lc_search__left }) => (
    <div
        className={className}
        >
        {children}
    </div>
)