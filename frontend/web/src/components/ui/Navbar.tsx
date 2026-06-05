import Link from './Link';
import { useState } from 'react';

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
}

function Navbar({
  links,
  linkClassName = 'md:mx-4 2xl:text-2xl font-goorm font-normal brand-navbar flex items-center gap-1 whitespace-nowrap',
  activeLinkClassName = 'bg-brand-highlight px-3 rounded-sm',
  variant = 'horizontal',
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
    <div className="flex items-center justify-end md:justify-center">
      {/*hamburger button for mobile*/}
      {variant === 'horizontal' && (
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
    </div>
  );
}

export default Navbar;
