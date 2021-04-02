import React from 'react';
import Styles from './contactustemplate__form__title.module.sass';

export const ContactupTemplateFormTitle = ({ children, className = Styles.contactus__form__title }) => (
    <div className={className}>
        {children}
    </div>
)