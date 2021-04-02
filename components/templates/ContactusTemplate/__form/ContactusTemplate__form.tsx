import React from 'react';
import Styles from './logintemplate__description.module.sass';

export const ContactupTemplateForm = ({ children, className = Styles.contactus__form }) => (
    <div className={className}>
        {children}
    </div>
)