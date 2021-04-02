import { compose } from 'util/bem';
import { Timeline as Base } from './Timeline';
import { TimelineReport } from './_type/_report/Timeline_report';

export const Timeline = compose(
    TimelineReport
)(Base);