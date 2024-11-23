import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { logo } from "./../assets";
// import NewsSlide from "./NewsSlide";

const NavBar = () => {
  const routes = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "/about",
    },
    {
      name: "Get Involved",
      url: "/get_involved",
    },
    {
      name: "Events",
      url: "/event",
    },
    {
      name: "Cancer Survivors Month",
      url: "/survivor",
    },
    {
      name: "Resources",
      url: "/resources",
    },
    {
      name: "Contact",
      url: "/contact",
    },
    // {
    //   name: "Events & Gallery",
    //   url: "/gallery",
    // },
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeActiveNav);

      return () => {
        window.removeEventListener("scroll", changeActiveNav);
      };
    }
  }, []);

  const showMenuToggle = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <nav className="w-full shadow-sm duration-300 relative">
      {/* Top Side */}
      {/* <div className="border-b-2 py-4">
        <div className="container px-2 mx-auto flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center justify-center gap-1 lg:flex-row lg:justify-between lg:gap-5">
            <Link to={"mailto:info@cancersupportnf.org"}>
              <h3 className="flex items-center justify-center">
                <IoMdMail size={18} className="mr-2" />
                info@cancersupportnf.org
              </h3>
            </Link>
            <Link to={"tel:+233552689014"}>
              <h3 className="flex items-center justify-center">
                <span>
                  <FaPhone size={18} className="mr-2" />
                </span>{" "}
                +233 552 689 014
              </h3>
            </Link>
            <Link
              to={
                "https://www.google.com/maps/place/13+Jungle+Ave,+Accra/@5.6359749,-0.1499459,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9b52b1b59443:0xa78e95de8ae3c1fd!8m2!3d5.6359749!4d-0.1499459!16s%2Fg%2F11hcz5mmqr?entry=ttu"
              }
              target="_blank"
            >
              <h3 className="flex items-center justify-center">
                <span>
                  <MdLocationPin size={18} className="mr-2" />
                </span>
                <span className="text-center md:text-start">
                  Olusegun Obasanjo Way, Near Accra Girls Senior High School
                </span>
              </h3>
            </Link>
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
      </div> */}

      {/* News Slide */}
      {/* <NewsSlide /> */}

      {/* Bottom Side */}
      <div className="absolute z-30 bg-white/50 backdrop-blur-md w-full h-[75px] flex items-center justify-center">
        <div className="right-0 left-0 w-full container px-2 mx-auto flex items-center justify-between ">
          <NavLink to={routes[0].url} className="logo">
            <img src={logo} alt="Cancer Support Network Foundation" />
          </NavLink>

          <ul className="hidden lg:flex items-center justify-center gap-5">
            {routes.map((route) => {
              return (
                <li key={route.name}>
                  <NavLink
                    to={route.url}
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-bold text-pink-600"
                        : "text-lg text-black"
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

          <Link
            to={"/support"}
            className="hidden text-xl lg:block text-white bg-red-600 hover:bg-red-600/70 rounded-md px-5 py-2 transition-all duration-300"
          >
            Support Us
          </Link>
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
            className="fixed top-0 right-0 left-0 w-full pb-3 bg-white z-50 shadow-md"
          >
            {/* <div className="pb-3">
              <NewsSlide />
            </div> */}

            <div className="container px-2 mx-auto flex items-center justify-between">
              <NavLink to={routes[0].url} className="logo">
                <img src={logo} alt="Cancer Support Network Foundation" />
              </NavLink>

              <ul className="hidden lg:flex items-center justify-center gap-5">
                {routes.map((route) => {
                  return (
                    <li key={route.name}>
                      <NavLink
                        to={route.url}
                        className={({ isActive }) =>
                          isActive
                            ? "text-lg font-bold text-pink-600"
                            : "text-lg font-normal"
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

              <Link
                to={"/support"}
                className="hidden text-xl lg:block text-white bg-red-600 hover:bg-red-600/70 rounded-md px-5 py-2 transition-all duration-300"
              >
                Support Us
              </Link>
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
            className="fixed w-2/3 z-50 h-full top-0 right-0 bg-white lg:hidden "
          >
            <div className="flex items-center justify-between px-5 bg-white py-4">
              <NavLink to={routes[0].url}>
                <img
                  src={logo}
                  className="cursor-pointer"
                  alt="Cancer Support Network Foundation"
                />
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

      {/* Oveelay */}
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
