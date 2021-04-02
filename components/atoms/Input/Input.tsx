import React from 'react';
import Styles from './input.module.sass';

export const Input = ({ type = 'text', placeholder = 'Input text', required = false, className = Styles.input }) => (
    <input
        type={type}
        placeholder={placeholder}
        required={required}
        className={className}
        />
)