import { Link } from "react-router-dom";
import Navbar from "./ui/Navbar.tsx";
import logo from "../assets/logo.png"

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 w-full">
      <div className="mx-auto px-4 md:px-8 lg:px-16 py-2 grid grid-cols-3 items-center justify-between">
        <Link
          to="/"
          className="flex items-center hover:opacity-90 transition-opacity justify-self-start"
          aria-label="Home"
        >
          <img src={logo} alt="Company Logo" className="h-2 md:h-6 w-auto" />
        </Link>

        <div className="absolute w-full left-0 top-0">
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;