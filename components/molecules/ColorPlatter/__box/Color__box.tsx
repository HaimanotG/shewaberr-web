import React from 'react';
import Styles from './color__box.module.sass';

export const ColorBox = ({ color, className = Styles.colorplatter__box }) => (
    <div className={className} style={{ background: color}}/>
)