import { withBemMod } from 'util/bem';
import IDividerProps from 'components/atoms/Divider/IDividerProps';
import BaseStyle from 'components/atoms/Divider/divider.module.sass';
import Styles from './divider_color_blue.module.sass';

export const DividerColorBlue = withBemMod<IDividerProps>(BaseStyle.divider, { color: Styles.divider_blue });