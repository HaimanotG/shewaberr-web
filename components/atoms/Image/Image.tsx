import React from 'react';
import IImageProps from 'components/atoms/Image/IImageProps';
import Styles from './image.module.sass';

export const Image : React.SFC<IImageProps> = ({ alt = 'Image', src = 'https://picsum.photos/200/300', className = Styles.image }) =>(
    <img className={className} alt={alt} src={src} />
)