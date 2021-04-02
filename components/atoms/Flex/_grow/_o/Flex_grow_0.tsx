import { withBemMod } from 'util/bem';
import BaseStyles from '../../flex.module.sass';
import Styles from './flex_grow_0.module.sass';

export const FlexGrow0 = withBemMod(BaseStyles.lc_flex, { grow: Styles.lc_flex_grow_0 });