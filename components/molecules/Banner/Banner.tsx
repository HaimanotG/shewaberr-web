import React from 'react';
import { IBannerProps } from 'components/molecules/Banner/IBannerProps';
import Styles from './banner.module.sass';

export const Banner : React.SFC<IBannerProps> = ({ children, className = Styles.banner }) => (
    <div
        className={className}
        >
        <div className={Styles.banner__wrapper}>
            <div className={Styles.banner__wrapper__container}>
                {children}
            </div>
        </div>
    </div>
)