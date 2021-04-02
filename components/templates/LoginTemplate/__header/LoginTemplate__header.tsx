import React from 'react';
import Styles from './logintemplate__header.module.sass';

export const LoginTemplateHeader = ({ children, className = Styles.login__header }) => (
    <div className={className}>
        {children}
    </div>
)