import { compose } from 'util/bem';
import { Button as Base } from 'components/atoms/Button/Button';
import { ButtonSizeSm } from 'components/atoms/Button/_size/_sm/Button_size_sm';
import { ButtonSizeLg } from 'components/atoms/Button/_size/_lg/Button_size_lg';

export const Button = compose(
    ButtonSizeSm,
    ButtonSizeLg
)(Base);