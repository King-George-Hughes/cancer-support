import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "./../assets";
import { NavLink } from "react-router-dom";
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
  const routes = [
    {
      name: "Services",
      url: "/",
    },
    {
      name: "Events",
      url: "/event",
    },
    {
      name: "Gallery",
      url: "/gallery",
    },
    {
      name: "Team",
      url: "/team",
    },
    {
      name: "Get Involved",
      url: "/get_involved",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  const [activeNav, setActiveNav] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeActiveNav = () => {
    if (window.scrollY >= 350) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
  };
  document.addEventListener("scroll", changeActiveNav);

  const showMenuToggle = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <nav className="w-full shadow-sm duration-300 relative">
      {/* Top Side */}
      <div className="border-b-2 py-4">
        <div className="container mx-auto flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center justify-center gap-1 lg:flex-row md:justify-between md:gap-5">
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
          <NavLink to={routes[0].url} className="logo">
            <img src={logo} alt="" />
          </NavLink>

          <ul className="hidden lg:flex items-center justify-center gap-5">
            {routes.map((route) => {
              return (
                <li key={route.name}>
                  <NavLink
                    to={route.url}
                    className={({ isActive }) =>
                      isActive
                        ? "text-xl font-bold text-pink-600"
                        : "text-xl font-normal"
                    }
                  >
                    {route.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <button className="lg:hidden" onClick={showMenuToggle}>
            <HiMenuAlt2 size={30} />
          </button>

          <button className="hidden text-xl lg:block border-2 border-pink-400 rounded-md px-5 py-2 hover:text-white hover:bg-pink-400 hover:border-gray-600 transition-all duration-300">
            Support Us
          </button>
        </div>
      </div>

      {/* Bottom Side with Active */}
      <AnimatePresence>
        {activeNav && (
          <motion.div
            initial={{ opacity: 0, top: -400 }}
            animate={{ opacity: 1, top: 0 }}
            exit={{ opacity: 0, top: -400 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 left-0 w-full py-3 bg-white z-20 shadow-md"
          >
            <div className="container mx-auto flex items-center justify-between">
              <NavLink to={routes[0].url} className="logo">
                <img src={logo} alt="" />
              </NavLink>

              <ul className="hidden lg:flex items-center justify-center gap-5">
                {routes.map((route) => {
                  return (
                    <li key={route.name}>
                      <NavLink
                        to={route.url}
                        className={({ isActive }) =>
                          isActive
                            ? "text-xl font-bold text-pink-600"
                            : "text-xl font-normal"
                        }
                      >
                        {route.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>

              <button className="lg:hidden" onClick={showMenuToggle}>
                <HiMenuAlt2 size={30} />
              </button>

              <button className="hidden text-xl lg:block border-2 border-pink-400 rounded-md px-5 py-2 hover:text-white hover:bg-pink-400 hover:border-gray-600 transition-all duration-300">
                Support Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show hidden Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, right: -500 }}
            animate={{ opacity: 1, right: 0 }}
            exit={{ opacity: 0, right: -500 }}
            transition={{ duration: 0.3 }}
            className="fixed w-2/3 h-full top-0 right-0 bg-white lg:hidden z-30"
          >
            <div className="flex items-center justify-between px-5 bg-white py-4">
              <NavLink to={routes[0].url}>
                <img src={logo} className="cursor-pointer" />
              </NavLink>
              <IoMdClose
                size={30}
                onClick={showMenuToggle}
                className="cursor-pointer"
              />
            </div>
            <div className="w-full h-full bg-white relative">
              <ul className="w-full h-[70%] bg-white flex flex-col items-center justify-center">
                {routes.map((route) => {
                  return (
                    <li
                      className="mb-2 text-start mx-1 px-2 duration-200 mt-3"
                      key={route.name}
                    >
                      <NavLink
                        to={route.url}
                        className={({ isActive }) =>
                          isActive
                            ? "text-lg text-pink-600 font-bold"
                            : "text-lg font-normal px-2"
                        }
                        onClick={() => setShowMenu(false)}
                      >
                        {route.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed z-20 w-full h-full left-0 right-0 bottom-0 bg-gradient-to-br from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.9)] backdrop-blur-[2px] lg:hidden"
            onClick={showMenuToggle}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
