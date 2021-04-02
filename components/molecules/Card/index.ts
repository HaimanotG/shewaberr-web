import { compose } from 'util/bem';
import { Card as Base } from 'components/molecules/Card/Card';
import { CardAnimationZoomin } from 'components/molecules/Card/_animation/_zoomin/Card_animation_zoomin';
import { CardContent } from 'components/molecules/Card/__content/Card__content';
import { CardMirror } from 'components/molecules/Card/CardMirror';
import { CardEffectMirror } from 'components/molecules/Card/_effect/_mirror/Card_effect_mirror';

export const Card = compose(
    CardAnimationZoomin,
    CardEffectMirror
)(Base);

export {
    CardContent,
    CardMirror
}