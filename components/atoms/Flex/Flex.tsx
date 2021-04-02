import React from 'react';
import Styles from './flex.module.sass';

export const Flex = ({ children, className = Styles.lc_flex }) => (
    <div
        className={className}
        >
        {children}
    </div>
)