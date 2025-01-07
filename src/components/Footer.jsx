import { logo } from "./../assets";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { latestNews } from "../data/data";

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
              are a non-profit organization born out of compassion, to care and
              support persons affected by cancer
            </h3>
            <Link
              to={
                "https://www.google.com/maps/place/13+Jungle+Ave,+Accra/@5.6359749,-0.1499459,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9b52b1b59443:0xa78e95de8ae3c1fd!8m2!3d5.6359749!4d-0.1499459!16s%2Fg%2F11hcz5mmqr?entry=ttu"
              }
              target="_blank"
            >
              <p className="text-md lg:text-lg text-gray-500 my-2">
                <span className="font-medium text-black">Address: </span>
                {/* 13 Jungle Avenue - East Legon, Accra */}
                Olusegun Obasanjo Way, Near Accra Girls Senior High School
              </p>
            </Link>
            <Link to={"tel:+233552689014"}>
              <p className="text-md lg:text-lg text-gray-500 my-2">
                <span className="font-medium text-black">Phone: </span>+233 552
                689 014
              </p>
            </Link>
            <Link to={"tel:+1 (301) 452-1462"}>
              <p className="text-md lg:text-lg text-gray-500 my-2">
                <span className="font-medium text-black">Phone: </span>+1 (301)
                452-1462
              </p>
            </Link>
            <Link to={"mailto:info@cancersupportnf.org"}>
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
              {latestNews.slice(0, 4).map((data, index) => (
                <li key={data.id} className="text-md lg:text-lg my-3">
                  <Link to={`/recent/${data.id}/${data.title}`}>
                    {index + 1}. {data.title.substring(0, 35)}...
                  </Link>
                </li>
              ))}
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
