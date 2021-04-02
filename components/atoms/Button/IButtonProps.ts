import { IClassNameProps } from 'util/bem';

export default interface IButtonProps extends IClassNameProps {
    children: any,
    
    size?: string,
    color?: string,
}