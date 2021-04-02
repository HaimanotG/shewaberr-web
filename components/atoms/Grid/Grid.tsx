import React from 'react';
import IGridProps from 'components/atoms/Grid/IGridProps';
import Styles from './grid.module.sass';

export const Grid : React.SFC<IGridProps> = ({ children, className = Styles.lc_grid }) => (
    <div
        className={className}
        >
        {children}
    </div>
)