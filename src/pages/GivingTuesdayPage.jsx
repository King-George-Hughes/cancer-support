import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { home_banner_bg, master_card, paypal, skrill, visa } from "../assets";
// const currentUrl = window.location.href;

const GivingTuesdayPage = () => {
  const currentUrl = "https://cancersupportnf.org/giving-tuesday";
  const pageTitle = "Giving Tuesday | Cancer Support Network Foundation";
  const pageDescription =
    "Giving Tuesday! Show your compassion and commitment by supporting the Cancer Support Network Foundation this Giving Tuesday. This global day of giving presents a meaningful opportunity to stand with cancer patients and their families during their most difficult moments.";

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content="https://cancersupportnf.org/banner.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta
          property="twitter:image"
          content="https://cancersupportnf.org/banner.png"
        />
      </Helmet>

      {/* Hero Section 1 */}
      <div className="w-full min-h-[350px] relative lg:min-h-[500px]">
        <img
          src={home_banner_bg}
          alt=""
          className="absolute left-0 right-0 bottom-0 w-full h-full object-cover"
        />
      </div>

      {/* Hero Section 2 */}
      <div className="w-full bg-pink-50 py-8 text-start md:text-center">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-3xl relative lg:text-5xl font-semibold">
            Giving{" "}
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px] lg:before:w-3/4 lg:before:bottom-4 z-10">
              Tuesday
            </span>
          </h2>

          <p className="text-lg md:text-xl mt-3 lg:mt-5">
            Show your compassion and commitment by supporting the Cancer Support
            Network Foundation this Giving Tuesday.
          </p>
        </div>
      </div>

      <div className="w-full py-7 text-start md:text-justify">
        <div className="container max-w-2xl mx-auto">
          <p className="text-lg md:text-xl mt-2 lg:mt-4">
            This global day of giving presents a meaningful opportunity to stand
            with cancer patients and their families during their most difficult
            moments.
          </p>

          <p className="text-lg md:text-xl lg:text-2xl mt-8 lg:mt-8 font-bold">
            Will you join us in raising $20,000 to support our mission?
          </p>

          <p className="text-lg md:text-xl mt-4 lg:mt-6">
            Through your generosity, we are able to provide critical
            assistance—lifesaving medical support, emotional counseling,
            nutrition aid, transportation for treatment, and financial relief
            for those battling cancer.
          </p>

          <p className="text-lg md:text-xl mt-4 lg:mt-6">
            Your support also helps us expand awareness programs, early
            screening initiatives, and community outreach, ensuring that more
            lives are touched, supported, and empowered across the country.
          </p>

          <p className="text-lg md:text-xl mt-8 lg:mt-8 font-bold">
            Help us reach our $20,000 goal by giving as generously as you can.
            Together, we can bring hope, comfort, and strength to those fighting
            cancer this holiday season.
          </p>
        </div>
      </div>

      <div className="mt-[1rem] pb-5">
        <div className="container max-w-2xl mx-auto">
          <p className="text-lg md:text-x pl-2 pb-2 font-light md:font-normal">
            Complete your donation below:.
          </p>
          <div className="shadow-lg p-5 lg:p-10 mb-5 rounded-md border-2">
            <h2 className="text-pink-600 text-xl lg:text-3xl font-medium">
              We accept these payments
            </h2>
            <div className="flex items-center gap-2 lg:gap-5 mt-5">
              <img
                className="w-[65px] md:w-[100px] lg:w-fit"
                src={visa}
                alt="visa"
              />
              <img
                className="w-[65px] md:w-[100px] lg:w-fit"
                src={skrill}
                alt="skrill"
              />
              <img
                className="w-[65px] md:w-[100px] lg:w-fit"
                src={master_card}
                alt="mater-card"
              />
              <img
                className="w-[65px] md:w-[100px] lg:w-fit"
                src={paypal}
                alt="paypl"
              />
            </div>
            <Link
              to={"https://www.paypal.com/biz/fund?id=B7HXR6LVB49V8"}
              target="_blank"
              className="block w-52 lg:w-72 text-center text-md lg:text-2xl p-3 bg-pink-600 mt-8 rounded-lg text-white"
            >
              Donate Paypal Here
            </Link>
          </div>
          <div className="pb-5 rounded-b-lg flex items-center flex-col gap-10 lg:flex-row">
            <div className="w-full lg:w-1/3">
              <div className="w-full">
                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium mt-5">
                  Access Bank
                </h2>
                <ul className="list-disc ml-10">
                  <li className="text-gray-500 text-md lg:text-lg my-1">
                    Name: Cancer Support Network Foundation
                  </li>
                  <li className="text-gray-500 text-md lg:text-lg my-1">
                    USD Account: 0071015809691
                  </li>
                </ul>

                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium mt-5 lg:mt-5">
                  Zelle
                </h2>
                <ul className="list-disc ml-10">
                  <li className="text-gray-500 text-md lg:text-lg my-1">
                    Csnetworkgh@gmail.com
                  </li>
                </ul>

                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium mt-5 lg:mt-5">
                  Cash App
                </h2>
                <ul className="list-disc ml-10">
                  <li className="text-gray-500 text-md lg:text-lg my-1">
                    CSNF
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GivingTuesdayPage;
