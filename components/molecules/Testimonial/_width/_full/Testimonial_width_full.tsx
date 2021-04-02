import BaseStyles from '../../testimonial.module.sass';
import Styles from './testimonial_width_full.module.sass';
import { withBemMod } from 'util/bem';

export const TestimonialWidthFull = withBemMod(BaseStyles.lc_testimonial, { width: Styles.lc_testimonial_full });