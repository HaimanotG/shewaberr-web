import React from 'react';
import Styles from './landing__hero.module.sass';

export const LandingHeroTemplate = ({ children, className = Styles.lc_landing__hero }) => (
    <div
        className={className}
        >
        {children}
    </div>
)