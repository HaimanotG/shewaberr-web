import React from 'react';
import Styles from './contactustemplate__form__details.module.sass';

export const ContactupTemplateFormDetails = ({ children, className = Styles.contactus__form__details }) => (
    <div className={className}>
        {children}
    </div>
)