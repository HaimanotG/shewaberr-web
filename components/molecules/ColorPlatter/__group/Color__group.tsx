import React from 'react';
import Styles from './color__group.module.sass';

export const ColorGroup = ({ children, name, color, className = Styles.colorplatter__group }) => (
    <div>
        <div className={Styles.colorplatter__group__title} style={{background: color }}>{name + ' ' + color}</div>
        <div className={className}>
            {children}
        </div>
    </div>
)