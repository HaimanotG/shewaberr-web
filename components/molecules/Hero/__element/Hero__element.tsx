import React from 'react';
import Styles from './hero__element.module.sass';

export const HeroElement = ({ children, className = Styles.lc_hero__element }) => (
    <div
        className={className}
        >
        {children}
    </div>
)