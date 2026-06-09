import resume from '@/assets/resume.pdf';
import Button from "./ui/Button";
import Navbar from "./ui/Navbar";
import { CiMail } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RiGithubFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import { FaArrowUp } from "react-icons/fa";

function Footer() {

  const handleDownload = () => {
    window.location.href = resume;
  };

  return (
    <footer className="px-5 py-8 flex flex-col gap-5 bg-surface-section">

      {/* top row: logo left, navbar right */}
      <div className="flex items-center w-full">
        <div className="hidden md:block xl:ml-5">
          <Link to="/" aria-label="Home" className="hover:opacity-80 transition-opacity z-10">
            <img src={logo} alt="Company Logo" className="h-6 md:h-8 2xl:h-12 w-auto" />
          </Link>
        </div>
        <div className="md:ml-auto flex items-center gap-25 mr-5">
          <Navbar variant="horizontal" showHamburger={false} />
          <Button
            variant="secondary"
            className="hidden xl:flex gap-2 items-center"
            onClick={handleDownload}
            rounded
          >
            download my resume
          </Button>
        </div>
      </div>

      {/* main content: left col + right col on md */}
      <div className="flex flex-col md:flex-row md:justify-between gap-5">

        {/* left: email + heading */}
        <div className="flex flex-col gap-5 lg:w-2/3 xl:ml-10">
          <div className="flex items-center gap-2 lg:hidden">
            <CiMail size={24} className="stroke-[0.5]" />
            <h2 className="font-reflow text-text-secondary text-lg 2xl:text-2xl max-w-sm">Kattsyna@Gmail.Com</h2>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-9xl 2xl:text-[250px] font-unitea bg-gradient-to-b from-[var(--color-gradient-text-from)] via-[var(--color-gradient-text-via)] to-transparent bg-clip-text text-transparent xl:leading-[0.85]">
            Full-Stack <br />
            Engineer
          </h1>
        </div>

        {/* right: button + socials */}
        <div className="flex xl:hidden flex-col items-start md:items-end gap-5">
          <Button
            variant="secondary"
            className="flex gap-2 items-center w-full md:w-auto"
            onClick={handleDownload}
            rounded
          >
            download my resume
          </Button>

          <div className="flex items-center gap-4">
            <BsInstagram size={30} />
            <TiSocialLinkedinCircular size={36} />
            <RiGithubFill size={36} />
          </div>
        </div>

      </div>

      {/* bottom: copyright */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 xl:ml-10">
        <p className="font-goorm font-normal text-sm xl:text-lg 2xl:text-xl text-text-secondary self-start">
          2026 Margarita Kattsyna.
        </p>
        <p className="font-goorm text-sm xl:text-lg 2xl:text-xl text-text-secondary self-end md:self-auto">
          All rights reserved.
        </p>

        <div className="hidden lg:flex items-center gap-2 md:mx-auto">
          <CiMail size={24} className="stroke-[0.5]" />
          <h2 className="font-reflow text-text-secondary text-sm xl:text-lg 2xl:text-xl ">Kattsyna@Gmail.Com</h2>
        </div>
        
        <div 
        className="hidden md:flex md:ml-auto items-center gap-1 mr-5 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <p className="font-goorm text-sm xl:text-lg 2xl:text-xl text-text-secondary">Back To Top</p>
          <FaArrowUp />
        </div>
      </div>

    </footer>
  );
}

export default Footer;