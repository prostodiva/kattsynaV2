import resume from '@/assets/resume.pdf';
import Button from "./ui/Button";
import Navbar from "./ui/Navbar";
import { CiMail } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RiGithubFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

function Footer() {

  const handleDownload = () => {
  window.location.href = resume;
  };

  return (
    <footer className="px-5 py-8 flex flex-col gap-6">
      <div className="flex-1 flex justify-center">
        <Navbar variant="horizontal" showHamburger={false} />
      </div>

      <div className="flex items-center gap-2">
        <CiMail size={24} className="stroke-[0.5]" />
        <h2 className="font-reflow text-text-secondary text-lg 2xl:text-2xl max-w-sm">Kattsyna@Gmail.Com</h2>
      </div>

      <div className="flex items-center gap-5">
        <BsInstagram size={30} />
        <TiSocialLinkedinCircular size={36}/>
        <RiGithubFill size={36}/>
      </div>

      <div>
        <h1 className="text-6xl font-unitea bg-gradient-to-b from-[var(--color-gradient-text-from)] via-[var(--color-gradient-text-via)] to-[var(--color-gradient-text-to)] bg-clip-text text-transparent">
          Full-Stack <br />
          Engineer
        </h1>
      </div>

      <Button
          variant="secondary"
          className="lg:flex gap-2 items-center w-full"
          onClick={handleDownload}
          rounded
        >
          download my resume
      </Button>

      <div className="flex flex-col">
        <p className="font-goorm text-sm text-text-secondary self-start">
          2026 Margarita Kattsyna
        </p>
        <p className="font-goorm text-sm text-text-secondary self-end">
          All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
