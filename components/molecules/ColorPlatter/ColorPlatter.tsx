import React from 'react';
import IColorPlatter from 'components/molecules/ColorPlatter/IColorPlatterProps';
import Styles from './colorplatter.module.sass';

export const ColorPlatter : React.SFC<IColorPlatter> = ({ children, className = Styles.colorplatter }) => (
    <div className={className}>
        {children}
    </div>
);