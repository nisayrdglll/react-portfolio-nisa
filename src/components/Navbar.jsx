import logo from "../assets/nisa-imza.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SlUserFemale } from "react-icons/sl";
import Nisa_Yurdagül_Resume from "../assets/Nisa_Yurdagül_Resume.pdf";

const Navbar =() => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
     <div className="flex flex-shrink-0 item">
         <p className="my-10 text-center text-4xl">
            <img src={logo} alt="" srcset="" />
         </p>
     </div>
     <div className="m-8 flex items-center justify-center gap-4 text-2xl">
     <a href="https://www.linkedin.com/in/nisayurdagul/">
        <FaLinkedin/>
      </a>
      <a href="https://github.com/nisayrdglll">
        <FaGithub/>
      </a>
      <button className="">
         <a href={Nisa_Yurdagül_Resume} download='Nisa_Yurdagül_Resume'>Download Resume</a>
      </button>
     </div>
    </nav> );

};

export default Navbar;