import React from 'react';
import { withBemMod } from 'util/bem';
import BaseStyle from '../../navbar__brand.module.sass';
import Styles from './navbar__brand@desktop_align_center.module.sass';

export const NavbarBrandDesktopAlignCenter = withBemMod(BaseStyle.lc_navbar__brand_desktop, { align: Styles.lc_navbar__brand_desktop_center})