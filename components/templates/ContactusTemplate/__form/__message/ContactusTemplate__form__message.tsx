import React from 'react';
import Styles from './contactustemplate__form__message.module.sass';

export const ContactupTemplateFormMessage = ({ children, className = Styles.contactus__form__message }) => (
    <div className={className}>
        {children}
    </div>
)