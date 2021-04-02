import { compose } from 'util/bem';
import { Image as Base } from 'components/atoms/Image/Image';
import { ImageSizeSm } from 'components/atoms/Image/_size/_sm/Image_size_sm';

export const Image = compose(
    ImageSizeSm,
)(Base);