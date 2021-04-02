import { IClassNameProps } from 'util/bem';

export default interface IAvatar extends IClassNameProps {
    children: any,
    
    src?: string,
    alt?: string,
    size?: string,
}