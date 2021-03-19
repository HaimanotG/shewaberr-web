import { withBemMod } from 'util/bem';
import IButtonProps from 'components/atoms/Button/IButtonProps';
import BaseStyles from 'components/atoms/Button/button.module.sass';
import Styles from './button_size_lg.module.sass';

export const ButtonSizeLg = withBemMod<IButtonProps>(BaseStyles.button, { size: Styles.button_lg });