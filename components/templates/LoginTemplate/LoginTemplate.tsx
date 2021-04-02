import React from 'react';
import ILoginTemplate from 'components/templates/LoginTemplate/ILoginTemplateProps';
import Styles from './login.module.sass';

export const LoginTemplate : React.SFC<ILoginTemplate> = ({ children, className = Styles.login }) => (
    <div className={className}>
        {children}
    </div>
)