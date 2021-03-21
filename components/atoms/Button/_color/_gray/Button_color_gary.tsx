import { withBemMod } from 'util/bem';
import IButtonProps from 'components/atoms/Button/IButtonProps';
import BaseStyles from 'components/atoms/Button/button.module.sass';
import Styles from './buton_color_gray.module.sass';

export const ButtonColorGray = withBemMod<IButtonProps>(BaseStyles.button, { color: Styles.button_gray });