import React from 'react';
import Styles from './dashboardtemplate.module.sass';

export const DashboardTemplate = ({ children, className = Styles.dashboard }) => (
    <div
        className={className}
        >
        <div className={Styles.dashboard__body}>
            {children}
        </div>
    </div>
)