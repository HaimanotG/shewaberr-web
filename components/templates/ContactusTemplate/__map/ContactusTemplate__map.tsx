import React from 'react';
import Styles from './contactuptemplate__map.module.sass';

export const ContactupTemplateMap = ({ children, className = Styles.contactus__map }) => (
    <div className={className}>
        {children}
    </div>
)