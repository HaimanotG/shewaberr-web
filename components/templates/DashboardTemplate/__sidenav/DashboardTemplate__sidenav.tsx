import React from 'react';
import Styles from './dashboardtemplate__sidenav.module.sass';

export const DashboardTemplateSidenav = ({ children, className = Styles.dashboard__sidenav }) => (
    <div
        className={className}
        >
        {children}
    </div>
)