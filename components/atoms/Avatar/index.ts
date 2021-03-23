import { compose } from 'util/bem';
import { Avatar as Base } from 'components/atoms/Avatar/Avatar';
import { AvatarWrapper } from 'components/atoms/Avatar/AvatarWrapper';
import { AvatarText } from 'components/atoms/Avatar/__text/Avatar__text';
import { AvatarWrapped } from 'components/atoms/Avatar/AvatarWrapped';

/*export const Avatar = compose(

)(Base);*/

export const Avatar = Base;

export { 
    AvatarWrapper,
    AvatarText,
    AvatarWrapped
}