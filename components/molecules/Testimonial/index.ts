import { compose } from 'util/bem';
import { Testimonial as Base } from './Testimonial';
import { TestimonialWidthFull } from './_width/_full/Testimonial_width_full';

export const Testimonial = compose(
    TestimonialWidthFull
)(Base);