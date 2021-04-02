import { withBemMod } from 'util/bem';
import ICardProps from 'components/molecules/Card/ICardProps';
import BaseStyle from 'components/molecules/Card/card.module.sass';
import Styles from './card_effect_mirror.module.sass';

export const CardEffectMirror = withBemMod<ICardProps>(BaseStyle.lc_card, { effect: Styles.lc_card_mirror})