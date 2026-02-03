import logo from "../assets/Afia.png";
import { FaLinkedin } from "react-icons/fa"; 
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { FaResearchgate } from 'react-icons/fa';
import { SiGooglescholar } from "react-icons/si";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-12 w-12" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
     {/*  <a href="https://www.linkedin.com/in/afia-tasnim-2704a0384/"><FaLinkedin /></a>   */}
      <a href="https://github.com/afia25"><FaGithub /></a> 
      <a href="https://scholar.google.com/citations?user=gWzNUJYAAAAJ&hl=en&authuser=1"><SiGooglescholar /></a>
      <a href="https://www.researchgate.net/profile/Afia-Tasnim-4"><FaResearchgate /></a>
    </div>
  </nav>
};

export default Navbar;

