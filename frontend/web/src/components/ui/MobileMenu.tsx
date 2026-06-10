import { useRef } from 'react';
import { CiMail } from 'react-icons/ci';
import { RiGithubFill } from 'react-icons/ri';
import { IoCloseSharp } from "react-icons/io5";
import Link from './Link';

interface NavLink {
  label: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  activeLinkClassName?: string;
}

function MobileMenu({ isOpen, onClose, links, activeLinkClassName }: MobileMenuProps) {
  const ref = useRef<HTMLDialogElement>(null);

  if (isOpen) ref.current?.showModal();
  else ref.current?.close();

  return (
    <dialog
        ref={ref}
        onClose={onClose}
        className="fixed inset-0 w-full h-full m-0 max-w-none max-h-none bg-surface-page flex flex-col px-8 py-4"
        >
        <div className="flex items-center justify-end">
            <button onClick={onClose} className="text-text-primary" aria-label="Close menu">
            <IoCloseSharp size={28} />
            </button>
        </div>

        {/* nav links centered in remaining space */}
        <nav className="flex-1 flex flex-col items-start justify-center gap-4 w-fit mx-auto">
            {links.map((link) => (
            <Link
                key={link.label}
                to={link.path}
                className="text-4xl font-unitea uppercase text-text-primary"
                activeClassName={activeLinkClassName}
                onClick={onClose}
            >
                {link.label}
            </Link>
            ))}
        </nav>

        {/* bottom: contact */}
        <div className="flex flex-col gap-3 mb-5">
            <div className="flex items-center gap-2 text-text-secondary">
            <CiMail size={20} />
            <span className="font-reflow text-lg">Kattsyna@Gmail.Com</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
            <RiGithubFill size={20} />
            <span className="font-reflow text-lg">GitHub</span>
            </div>
        </div>
    </dialog>
  );
}

export default MobileMenu;