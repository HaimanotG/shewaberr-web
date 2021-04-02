import React from 'react';
import IAvatar from 'components/atoms/Avatar/IAvatar';
import Styles from './avatarwrapped.module.sass';

export const AvatarWrapped : React.SFC<IAvatar> = ({ children, alt = 'Profile image', src = 'https://randomuser.me/api/portraits/women/34.jpg', className = Styles.avatarwrapped }) => (
    <img
        src={src}
        alt={alt}
        className={className}
        >
        {children}
    </img>
)
