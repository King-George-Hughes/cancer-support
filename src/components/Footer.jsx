import { logo } from "./../assets";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const aboutPage = "/about";
  const contactPage = "/contact";
  const getInvolvedPage = "/get_involved";
  const eventPage = "/event";
  const galleryPage = "/gallery";

  return (
    <footer className="bg-gray-50 mt-10 pt-10">
      {/* Top Side */}
      <div className="container mx-auto">
        <div className="flex flex-col gap-5 md:flex-row pt-5 pb-12">
          <div className="w-full md:w-2/4">
            <img src={logo} alt="" />
            <h3 className="text-md lg:text-lg text-gray-500 my-3 max-w-lg">
              Cancer Support Network Foundation is a cancer care initiative. We
              are a not-for-profit organization born out of compassion, to care
              and support persons affected by cancer
            </h3>
            <Link
              to={
                "https://www.google.com/maps/place/13+Jungle+Ave,+Accra/@5.6359749,-0.1499459,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9b52b1b59443:0xa78e95de8ae3c1fd!8m2!3d5.6359749!4d-0.1499459!16s%2Fg%2F11hcz5mmqr?entry=ttu"
              }
              target="_blank"
            >
              <p className="text-md lg:text-lg text-gray-500 my-2">
                <span className="font-medium text-black">Address: </span>13
                Jungle Avenue - East Legon, Accra
              </p>
            </Link>
            <Link to={"tel:+233552689014"}>
              <p className="text-md lg:text-lg text-gray-500 my-2">
                <span className="font-medium text-black">Phone: </span>+233 552
                689 014
              </p>
            </Link>
            <Link to={"mailto:nfo@cancersupportnf.org"}>
              <p className="text-md lg:text-lg text-gray-500 my-2">
                <span className="font-medium text-black">Email: </span>
                info@cancersupportnf.org
              </p>
            </Link>
          </div>
          <div className="w-full md:w-1/4">
            <h1 className="text-xl lg:text-2xl font-medium mb-5 lg:mb-10">
              Quick links
            </h1>

            <ul>
              <li className="text-md lg:text-lg my-2">
                <Link to={aboutPage}>About us</Link>
              </li>
              <li className="text-md lg:text-lg my-2">
                <Link to={galleryPage}>Gallery</Link>
              </li>
              <li className="text-md lg:text-lg my-2">
                <Link to={eventPage}>Events</Link>
              </li>
              <li className="text-md lg:text-lg my-2">
                <Link to={contactPage}>Contact</Link>
              </li>
              <li className="text-md lg:text-lg my-2">
                <Link to={getInvolvedPage}>Support us</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h1 className="text-xl lg:text-2xl font-medium mb-5 lg:mb-10">
              Recent Events
            </h1>

            <ul>
              <li className="text-md lg:text-lg my-3">
                <Link
                  to={`/event/7/BREAST CANCER AWARENESS: Screening, Early detection, Diagnosis and Management.`}
                >
                  1. BREAST CANCER AWARENESS & SCREENING
                </Link>
              </li>
              <li className="text-md lg:text-lg my-3">
                <a href="#">
                  2. STEP UP FOR BLUE: JOIN THE FIGHT AGAINST PROSTATE CANCER
                </a>
              </li>
              <li className="text-md lg:text-lg my-3">
                <a href="#">3. Bladder Cancer</a>
              </li>
              <li className="text-md lg:text-lg my-3">
                <a href="#">4. Bowel Cancer Screening</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Side */}
      <div className="w-full py-3 bg-pink-600 flex items-center justify-center">
        <div className="container mx-auto text-white py-4 flex flex-col items-center justify-between md:flex-row ">
          <h2 className="text-md lg:text-lg text-center">
            All right reserved {new Date().getFullYear()}. Cancer Support
            Network Foundation
          </h2>
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
    </footer>
  );
};

export default Footer;
