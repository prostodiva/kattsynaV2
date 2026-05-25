import resume from "@/assets/resume.pdf"
import { Link } from "react-router-dom";
import Navbar from "./ui/Navbar.tsx";
import logo from "../assets/logo.webp"
import Button from "@/components/ui/Button.tsx";

function Header() {

    const handleDownload = () => {
        window.location.href = resume;
    }

  return (
      <header className="absolute top-0 left-0 right-0 z-50 bg-surface-header ">
        <div className="mx-auto px-5 md:px-8 lg:px-16 h-24 flex items-center justify-between">
          <Link to="/" aria-label="Home" className="hover:opacity-80 transition-opacity justify-self-start z-10">
            <img src={logo} alt="Company Logo" className="h-8 md:h-10 2xl:h-12 w-auto pl-10" />
          </Link>
            <div className="flex-1 flex justify-center">
                <Navbar />
            </div>
            <Button variant="secondary" className="hidden lg:flex" onClick={handleDownload}>
                download my resume
            </Button>
        </div>
      </header>
  );
}

export default Header;