import { IClassNameProps } from 'util/bem';

export default interface IImageProps extends IClassNameProps {
    children: any,
    alt?: string,
    src?: string,
    
    size?: string,
}