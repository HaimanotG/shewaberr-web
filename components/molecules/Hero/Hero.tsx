import React from 'react';
import Styles from './hero.module.sass';

export const Hero = ({ children, className = Styles.lc_hero }) => (
    <div
        className={className}
        >
        {children}
    </div>
)