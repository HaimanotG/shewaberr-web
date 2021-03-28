import { withBemMod } from 'util/bem';
import BaseStyles from '../../typography.module.sass';
import Styles from './typography_leading_relaxed.module.sass';

export const TypographyLeadingRelaxed = withBemMod(BaseStyles.lc_typography, { size: Styles.lc_typography_relaxed });