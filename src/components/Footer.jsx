import { logo } from "./../assets";

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-10 pt-10">
      <div className="container mx-auto">
        {/* Top Side */}
        <div className="flex flex-col gap-5 md:flex-row pt-5 pb-10">
          <div className="w-full md:w-2/4">
            <img src={logo} alt="" />
            <h3 className="text-lg text-gray-500 my-3 max-w-lg">
              Cancer Support Network Foundation is a cancer care initiative. We
              are a not-for-profit organization born out of compassion, to care
              and support persons affected by cancer
            </h3>
            <p className="text-lg text-gray-500 my-2">
              <span className="font-medium text-black">Address: </span>13 Jungle
              Avenue - East Legon, Accra
            </p>
            <p className="text-lg text-gray-500 my-2">
              <span className="font-medium text-black">Phone: </span>+233 552
              689 014
            </p>
            <p className="text-lg text-gray-500 my-2">
              <span className="font-medium text-black">Email: </span>
              info@cancersupportnf.org
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <h1 className="text-2xl font-medium mb-5 md:mb-10">Quick links</h1>

            <ul>
              <li className="text-lg my-2">
                <a href="#">About us</a>
              </li>
              <li className="text-lg my-2">
                <a href="#">Gallery</a>
              </li>
              <li className="text-lg my-2">
                <a href="#">Events</a>
              </li>
              <li className="text-lg my-2">
                <a href="#">About</a>
              </li>
              <li className="text-lg my-2">
                <a href="#">Support us</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h1 className="text-2xl font-medium mb-5 md:mb-10">
              Recent Events
            </h1>

            <ul>
              <li className="text-lg my-2">
                <a href="#">1. BREAST CANCER AWARENESS & SCREENING</a>
              </li>
              <li className="text-lg my-2">
                <a href="#">
                  2. STEP UP FOR BLUE: JOIN THE FIGHT AGAINST PROSTATE CANCER
                </a>
              </li>
              <li className="text-lg my-2">
                <a href="#">3. Bladder Cancer</a>
              </li>
              <li className="text-lg my-2">
                <a href="#">4. Bowel Cancer Screening</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
