import { Navbar as Base } from './Navbar';
import { NavbarContent } from './__content/Navbar__content';
import { NavbarBrandDesktop as BaseNavbarBrandDesktop } from './__brand@desktop/Navbar__brand';
import { compose } from 'util/bem';
import { NavbarBrandDesktopAlignLeft } from './__brand@desktop/_align/_left/Navbar__brand@dektop_align_left';
import { NavbarBrandDesktopAlignCenter } from './__brand@desktop/_align/_center/Navbar__brand@dektop_align_center';
import { NavbarOrange } from './_background/_orange/Navbar_orange';

export const Navbar = compose(
    NavbarOrange
)(Base);

export const NavbarBrandDesktop = compose(
    NavbarBrandDesktopAlignLeft,
    NavbarBrandDesktopAlignCenter
)(BaseNavbarBrandDesktop);

export {
    NavbarContent,
}
