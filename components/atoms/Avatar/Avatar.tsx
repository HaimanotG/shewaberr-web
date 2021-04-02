import React from 'react';
import IAvatar from 'components/atoms/Avatar/IAvatar';
import Styles from './avatar.module.sass';

export const Avatar : React.SFC<IAvatar> = ({ children, alt = 'Profile image', src = 'https://dynamiclandprojects.com/wp-content/uploads/2020/05/DLP-Team-Member-1024x1024.jpg', className = Styles.avatar }) => (
    <img
        src={src}
        alt={alt}
        className={className}
        >
        {children}
    </img>
)
