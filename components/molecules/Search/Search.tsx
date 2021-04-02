import React from 'react';
import Styles from './search.module.sass';

export const Search = ({ children, className = Styles.lc_search }) => (
    <div
        className={className}
        >
        {children}
    </div>
)