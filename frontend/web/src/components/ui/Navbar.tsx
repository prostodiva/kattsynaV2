import Link from './Link';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

interface NavLink {
  label: string;
  path: string;
}

interface NavbarProps {
  links?: NavLink[];
  containerClassName?: string;
  navClassName?: string;
  linkClassName?: string;
  activeLinkClassName?: string;
  logo?: React.ReactNode;
  variant?: 'horizontal' | 'vertical';
  alignment?: 'start' | 'center' | 'end' | 'between';
  showHamburger?: boolean;
}

function Navbar({
  links,
  linkClassName = 'md:mx-4 2xl:text-2xl font-goorm font-normal text-text-links brand-navbar flex items-center gap-1 whitespace-nowrap',
  activeLinkClassName = 'bg-brand-highlight text-text-secondary px-3 rounded-sm py-1',
  variant = 'horizontal', showHamburger = true,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultLinks: NavLink[] = [
    { label: 'Portfolio', path: '/' },
    { label: 'Experience', path: '/experience' },
    { label: 'Skills', path: '/skills' },
    { label: 'About Me', path: '/about' },
  ];

  const navLinks = links || defaultLinks;

  const variantClasses =
    variant === 'vertical'
      ? 'flex-col'
      : !showHamburger
        ? 'flex flex-row flex-wrap'       
        : mobileOpen
          ? 'flex-col absolute top-12 right-0'
          : 'hidden md:flex';        

  const renderedLinks = navLinks.map((link) => (
    <Link
      key={link.label}
      to={link.path}
      className={linkClassName}
      activeClassName={activeLinkClassName}
    >
      {link.label}
    </Link>
  ));

  return (
    <div className="flex w-full items-center justify-end md:justify-center">
      {/*hamburger button for mobile*/}
      {showHamburger && variant === 'horizontal' && (
        <button
          className="md:hidden ml-auto px-4 py-2 text-xl font-goorm font-normal uppercase"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          menu
        </button>
      )}

      <nav
        aria-label="Primary navigation"
        className={`flex ${variantClasses} items-start gap-1 justify-center`}
      >
        {renderedLinks}
      </nav>

      {mobileOpen && (
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
        activeLinkClassName="bg-brand-nav px-3 rounded-sm py-1"
      />
    )}
    </div>
  );
}

export default Navbar;
