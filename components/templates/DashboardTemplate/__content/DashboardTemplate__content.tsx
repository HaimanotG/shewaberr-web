import React from 'react';
import Styles from './dashboardtemplate__content.module.sass';

export const DashboardTemplateContent = ({ children, className = Styles.dashboard__content }) => (
    <div
        className={className}
        >
        {children}
    </div>
)