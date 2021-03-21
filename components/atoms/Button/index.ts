import { compose } from 'util/bem';
import { Button as Base } from 'components/atoms/Button/Button';
import { ButtonSizeSm } from 'components/atoms/Button/_size/_sm/Button_size_sm';
import { ButtonSizeLg } from 'components/atoms/Button/_size/_lg/Button_size_lg';
import { ButtonColorGray } from 'components/atoms/Button/_color/_gray/Button_color_gary';
import { ButtonMultiText } from 'components/atoms/Button/__multitext/Button__multitext';
import { ButtonMultiTextPriamry } from 'components/atoms/Button/__multitext/__primary/Button__multitext__primary';
import { ButtonMultiTextSecondary } from 'components/atoms/Button/__multitext/__secondary/Button__multitext__secondary';

export const Button = compose(
    ButtonSizeSm,
    ButtonSizeLg,
    ButtonColorGray
)(Base);

export {
    ButtonMultiText,
    ButtonMultiTextPriamry,
    ButtonMultiTextSecondary
}