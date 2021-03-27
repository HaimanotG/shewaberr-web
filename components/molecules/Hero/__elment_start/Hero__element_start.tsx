import React from 'react';
import Styles from './hero__element_start.module.sass';

export const HeroElementStart = ({ children, className = Styles.lc_hero__element }) => (
    <div
        className={className}
        >
        <div className={Styles.lc_hero__element_start}>
            {children}
        </div>
    </div>
)