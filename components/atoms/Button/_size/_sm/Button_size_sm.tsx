import { withBemMod } from 'util/bem';
import IButtonProps from 'components/atoms/Button/IButtonProps';
import BaseStyles from 'components/atoms/Button/button.module.sass';
import Styles from './button_size_sm.module.sass';

export const ButtonSizeSm = withBemMod<IButtonProps>(BaseStyles.button, { size: Styles.button_sm });