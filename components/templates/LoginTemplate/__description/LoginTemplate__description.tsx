import React from 'react';
import Styles from './logintemplate__description.module.sass';

export const LoginTemplateDescription = ({ children, className = Styles.login__description }) => (
    <div className={className}>
        {children}
    </div>
)