import { compose } from 'util/bem';
import { Divider as Base } from 'components/atoms/Divider/Divider';
import { DividerColorBlue } from 'components/atoms/Divider/_color/_blue/Divider_color_blue';

export const Divider = compose(
    DividerColorBlue
)(Base);