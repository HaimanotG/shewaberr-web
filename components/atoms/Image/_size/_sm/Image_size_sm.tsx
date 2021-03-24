import { withBemMod } from 'util/bem';
import IImageProps from 'components/atoms/Image/IImageProps';
import BaseStyle from 'components/atoms/Image/image.module.sass';
import Styles from './image_size_sm.module.sass';

export const ImageSizeSm = withBemMod<IImageProps>(BaseStyle.image, { size: Styles.image_sm });