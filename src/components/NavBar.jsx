import { useState } from "react";
import { logo } from "./../assets";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import { IoMdMail, IoMdClose } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";

const NavBar = () => {
  const homePage = "/";
  const aboutPage = "/about";
  const contactPage = "/contact";
  const getInvolvedPage = "/get_involved";
  const teamPage = "/team";
  const eventPage = "/events";
  const galleryPage = "/gallery";

  const [activeNav, setActiveNav] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeActiveNav = () => {
    if (window.scrollY >= 210) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
  };
  document.addEventListener("scroll", changeActiveNav);

  const showMenuToggle = () => {
    setShowMenu((prevState) => !prevState);
  };

  // "fixed w-full shadow-sm z-30 bg-white duration-300"

  return (
    <nav className="w-full shadow-sm duration-300">
      {/* Top Side */}
      <div className="border-b-2 py-4">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:justify-between md:gap-5">
            <h3 className="flex items-center justify-center">
              <IoMdMail size={18} className="mr-2" />
              info@cancersupportnf.org
            </h3>
            <h3 className="flex items-center justify-center">
              <span>
                <FaPhone size={18} className="mr-2" />
              </span>{" "}
              +233 552 689 014
            </h3>
            <h3 className="flex items-center justify-center">
              <span>
                <MdLocationPin size={18} className="mr-2" />
              </span>{" "}
              13 Jungle Avenue - East Legon, Accra
            </h3>
          </div>

          <ul className="flex items-center justify-center gap-5 mt-3 md:mt-0">
            <li>
              <a href="#">
                <FaFacebookSquare size={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare size={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Side */}
      <div className=" py-3">
        <div className="container mx-auto flex items-center justify-between">
          <Link to={homePage} className="logo">
            <img src={logo} alt="" />
          </Link>

          <ul className="hidden md:flex items-center justify-center gap-5">
            <li>
              <Link to={homePage} className="text-xl font-normal">
                Services
              </Link>
            </li>
            <li>
              <Link to={eventPage} className="text-xl font-normal">
                Events
              </Link>
            </li>
            <li>
              <Link to={galleryPage} className="text-xl font-normal">
                Gallery
              </Link>
            </li>
            <li>
              <Link to={teamPage} className="text-xl font-normal">
                Team
              </Link>
            </li>
            <li>
              <Link to={getInvolvedPage} className="text-xl font-normal">
                Get Involved
              </Link>
            </li>
            <li>
              <Link to={aboutPage} className="text-xl font-normal">
                About
              </Link>
            </li>
            <li>
              <Link to={contactPage} className="text-xl font-normal">
                Contact
              </Link>
            </li>
          </ul>

          <button className="md:hidden" onClick={showMenuToggle}>
            {showMenu ? <IoMdClose size={30} /> : <HiMenuAlt2 size={30} />}
          </button>

          <button className="hidden text-xl md:block border-2 border-pink-400 rounded-md px-5 py-2 hover:text-white hover:bg-pink-400 hover:border-gray-600 transition-all duration-300">
            Support Us
          </button>
        </div>
      </div>

      {/* Bottom Side with Active */}
      {activeNav && (
        <div className="fixed top-0 right-0 left-0 w-full py-3 bg-white z-20">
          <div className="container mx-auto flex items-center justify-between">
            <Link to={homePage} className="logo">
              <img src={logo} alt="" />
            </Link>

            <ul className="hidden md:flex items-center justify-center gap-5">
              <li>
                <Link to={homePage} className="text-xl font-normal">
                  Services
                </Link>
              </li>
              <li>
                <Link to={eventPage} className="text-xl font-normal">
                  Events
                </Link>
              </li>
              <li>
                <Link to={galleryPage} className="text-xl font-normal">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to={teamPage} className="text-xl font-normal">
                  Team
                </Link>
              </li>
              <li>
                <Link to={getInvolvedPage} className="text-xl font-normal">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to={aboutPage} className="text-xl font-normal">
                  About
                </Link>
              </li>
              <li>
                <Link to={contactPage} className="text-xl font-normal">
                  Contact
                </Link>
              </li>
            </ul>

            <button className="md:hidden" onClick={showMenuToggle}>
              {showMenu ? <IoMdClose size={30} /> : <HiMenuAlt2 size={30} />}
            </button>

            <button className="hidden text-xl md:block border-2 border-pink-400 rounded-md px-5 py-2 hover:text-white hover:bg-pink-400 hover:border-gray-600 transition-all duration-300">
              Support Us
            </button>
          </div>
        </div>
      )}

      {/* Show hidden Menu */}
      <ul
        className={
          showMenu
            ? "w-full visible opacity-100 blur-0 bg-white left-0 right-0 shadow-lg rounded-b-2xl top-[80px] duration-200 md:hidden"
            : "fixed invisible opacity-0 blur-md w-full bg-white left-0 right-0 drop-shadow-sm shadow-md rounded-b-2xl duration-200 md:hidden"
        }
      >
        <li className="my-2 mx-2 px-5 border-b-2 py-1">
          <Link to={homePage} className="text-xl font-normal">
            Services
          </Link>
        </li>
        <li className="my-2 mx-2 px-5 border-b-2 py-1">
          <Link to={eventPage} className="text-xl font-normal">
            Events
          </Link>
        </li>
        <li className="my-2 mx-2 px-5 border-b-2 py-1">
          <Link to={galleryPage} className="text-xl font-normal">
            Gallery
          </Link>
        </li>
        <li className="my-2 mx-2 px-5 border-b-2 py-1">
          <Link to={teamPage} className="text-xl font-normal">
            Team
          </Link>
        </li>
        <li className="my-2 mx-2 px-5 border-b-2 py-1">
          <Link to={getInvolvedPage} className="text-xl font-normal">
            Get Involved
          </Link>
        </li>
        <li className="my-2 mx-2 px-5 border-b-2 py-1">
          <Link to={aboutPage} className="text-xl font-normal">
            About
          </Link>
        </li>
        <li className="my-2 mx-2 px-5 pb-2">
          <Link to={contactPage} className="text-xl font-normal">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
