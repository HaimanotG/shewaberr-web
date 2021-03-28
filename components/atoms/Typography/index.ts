import { compose } from 'util/bem';
import { Typography as Base } from './Typography';
import { TypographNumericOrdinal } from './_numeric/_ordinal/Typography_numberic_ordinal';
import { TypographySizeExtra } from './_size/_extra/Typography_size_extra';
import { TypographySizeLg } from './_size/_lg/Typography_size_lg';
import { TypographyLeadingRelaxed } from './_leading/_relaxed/Typography_leading_relaxed';

export const Typography = compose(
    TypographNumericOrdinal,
    TypographySizeExtra,
    TypographySizeLg,
    TypographyLeadingRelaxed
)(Base);