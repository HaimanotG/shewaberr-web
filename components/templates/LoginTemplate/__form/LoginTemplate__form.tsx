import React from 'react';
import Styles from './logintemplate__form.module.sass';

export const LoginTemplateForm = ({ children, className = Styles.login__form }) => (
    <div className={className}>
        {children}
    </div>
)