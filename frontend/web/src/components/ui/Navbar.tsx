import Link from './Link';
import {useState} from "react";

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
                    linkClassName = 'gap-2 my-2 md:mx-4 text-2xl text-gray-400 flex items-center gap-1 whitespace-nowrap',
                    activeLinkClassName = 'font-bold text-white',
                    variant = 'horizontal',
                }: NavbarProps) {
                  const [mobileOpen, setMobileOpen] = useState(false);

                  const defaultLinks: NavLink[] = [
                    { label: 'Home', path: '/' },
                    { label: 'Store', path: '/store' },
                    { label: 'About Us', path: '/about' },
                    { label: 'Support', path: '/support' },
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
                          className="md:hidden ml-auto px-4 py-2 text-2xl font-inter"
                          onClick={() => setMobileOpen(!mobileOpen)}
                          aria-label="Toggle menu"
                          aria-expanded={mobileOpen}
                        >
                          MENU
                        </button>
                      )}

                      <nav
                        aria-label="Primary navigation"
                        className={`flex ${variantClasses} items-start gap-10  justify-center`}
                      >
                        {renderedLinks}
                      </nav>
                    </div>
                  );
                }

export default Navbar;