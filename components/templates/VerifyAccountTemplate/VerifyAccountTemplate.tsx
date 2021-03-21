import React from 'react';
import IVerifyAccountTemplate from 'components/templates/VerifyAccountTemplate/IVerifyAccountTemplate';
import Styles from './verifyaccounttemplate.module.sass';

export const VerifyAccountTemplate : React.SFC<IVerifyAccountTemplate> = ({ children, className = Styles.verifyaccount }) => (
    <div className={className}>
        {children}
    </div>
)