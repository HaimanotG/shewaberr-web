import { withBemMod } from 'util/bem';
import BaseStyles from '../../flex.module.sass';
import Styles from './flex_grow_1.module.sass';

export const FlexGrow1 = withBemMod(BaseStyles.lc_flex, { grow: Styles.lc_flex_grow_1 });