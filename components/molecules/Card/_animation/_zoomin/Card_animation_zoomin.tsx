import { withBemMod } from 'util/bem';
import ICardProps from 'components/molecules/Card/ICardProps';
import BaseStyle from 'components/molecules/Card/card.module.sass';
import Styles from './card_animation_zoomin.module.sass';

export const CardAnimationZoomin = withBemMod<ICardProps>(BaseStyle.lc_card, { animation: Styles.lc_card_zoomin})