import React, { useState } from 'react';
import Styles from './tooltip.module.sass';

export const Tooltip = ({ children, tooltipText, className = Styles.lc_tooltip }) => {
    const [onMouseHoverClassName, setOnMouseHoverClassName] = useState('none');

    return(
        <div
            className={className}
            onMouseEnter={() => setOnMouseHoverClassName('block')}
            onMouseLeave={() => setOnMouseHoverClassName('none')}
            >
            <div className={Styles.lc_tooltip__container} style={{display: onMouseHoverClassName}}>
                <div className={Styles.lc_tooltip__arrow} />
                {tooltipText}
            </div>
            {children}
        </div>
    )
}