import { IClassNameProps } from 'util/bem';

export default interface ICardProps extends IClassNameProps {
    children: any,

    effect?: string,
    animation?: string,
}