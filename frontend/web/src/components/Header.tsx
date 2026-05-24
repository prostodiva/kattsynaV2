import { Link } from "react-router-dom";
import Navbar from "./ui/Navbar.tsx";
import logo from "../assets/logo.webp"

function Header() {
  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-page ">
        <div className="mx-auto px-5 md:px-8 lg:px-16 h-16 flex items-center justify-between max-w-container">
          <Link to="/" aria-label="Home" className="hover:opacity-80 transition-opacity">
            <img src={logo} alt="Company Logo" className="h-8 md:h-10 w-auto" />
          </Link>
          <Navbar />
        </div>
      </header>
  );
}

export default Header;