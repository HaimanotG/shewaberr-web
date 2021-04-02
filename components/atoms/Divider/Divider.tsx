import React from 'react';
import Styles from './divider.module.sass';
import IDividerProps from 'components/atoms/Divider/IDividerProps';

export const Divider : React.SFC<IDividerProps> = ({ className = Styles.divider }) => (
    <hr className={className} />
)