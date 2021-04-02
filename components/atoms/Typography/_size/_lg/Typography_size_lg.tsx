import { withBemMod } from 'util/bem';
import BaseStyles from '../../typography.module.sass';
import Styles from './typography_size_lg.module.sass';

export const TypographySizeLg = withBemMod(BaseStyles.lc_typography, { size: Styles.lc_typography_lg });