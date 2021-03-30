
import { withBemMod } from 'util/bem';
import BaseStyles from '../../timeline.module.sass';
import Styles from './timeline_report.module.sass';

export const TimelineReport = withBemMod(BaseStyles.lc_timeline, { type: Styles.lc_timeline_report })