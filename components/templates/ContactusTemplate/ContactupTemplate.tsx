import React from 'react';
import IContactusTemplateProps from 'components/templates/ContactusTemplate/IContactusTemplateProps';
import Styles from './contactustemplate.module.sass';

export const LoginTemplate : React.SFC<IContactusTemplateProps> = ({ children, className = Styles.contactus }) => (
    <div className={className}>
        {children}
    </div>
)