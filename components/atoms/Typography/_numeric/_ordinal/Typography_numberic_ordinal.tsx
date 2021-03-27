import { withBemMod } from 'util/bem';
import BaseStyles from '../../typography.module.sass';
import Styles from './typography_numeric_ordinal.module.sass';

export const TypographNumericOrdinal = withBemMod(BaseStyles.lc_typography, { numeric: Styles.lc_typography_ordinal})