import { useState } from 'react';

export function useNavigation(anchorEl, setAnchorEl) {
  const [nav, setNav] = useState(false);

  const openNav = (e) => {
    setNav(true);
    setAnchorEl(e.currentTarget);
  };

  const closeNav = () => {
    setNav(false);
    setAnchorEl(null);
  };

  return {
    nav,
    openNav,
    closeNav
  };
}
