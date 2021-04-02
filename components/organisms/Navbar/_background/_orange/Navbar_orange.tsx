import { withBemMod } from 'util/bem';
import BaseStyles from '../../navbar.module.sass';
import Styles from './navbar_orange.module.sass';

export const NavbarOrange = withBemMod(BaseStyles.lc_navbar, { background: Styles.lc_navbar_orange })