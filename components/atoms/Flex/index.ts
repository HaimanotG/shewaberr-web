import { compose } from 'util/bem';
import { Flex as Base } from './Flex';
import { FlexGrow0 } from './_grow/_o/Flex_grow_0';
import { FlexGrow1 } from './_grow/_1/Flex_grow_1';

export const Flex = compose(
    FlexGrow0,
    FlexGrow1
)(Base);