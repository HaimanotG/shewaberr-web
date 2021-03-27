import { withBemMod } from 'util/bem';
import BaseStyles from '../../typography.module.sass';
import Styles from './typography_size_extra.module.sass';

export const TypographySizeExtra = withBemMod(BaseStyles.lc_typography, { size: Styles.lc_typography_extra });