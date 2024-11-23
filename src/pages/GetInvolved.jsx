import { Link } from "react-router-dom";
import { home_banner_bg } from "../assets";

const GetInvolved = () => {
  return (
    <div>
      {/* Hero Section 1 */}
      <div className="w-full min-h-[400px] relative lg:min-h-[600px]">
        <img
          src={home_banner_bg}
          alt=""
          className="absolute left-0 right-0 bottom-0 w-full h-full object-cover"
        />
        <div className="absolute left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.5)]"></div>
        <div className="container mx-auto absolute left-0 right-0 bottom-0 w-full h-full z-10 flex items-center justify-center">
          <div className="font-poppins text-white">
            <h2 className="text-5xl font-bold relative lg:text-8xl">
              <span className="relative before:absolute before:w-full before:h-[15px] before:left-0 before:right-0 before:bottom-2 before:bg-blue-600 before:-z-10 lg:before:w-3/4 lg:before:h-[25px] lg:before:bottom-5">
                Volunteer
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Hero Section 2 */}
      <div className="mt-[3rem] pb-2 lg:pt-[3rem]">
        <div className="container mx-auto">
          <h2 className="text-xl text-center">Get Involved</h2>
          <h2 className="text-3xl relative lg:text-6xl text-center">
            Sign up as a{" "}
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px] lg:before:w-3/4 lg:before:bottom-4">
              Volunteer
            </span>
          </h2>
          <div className="mt-10 pb-5 rounded-b-lg flex items-center flex-col gap-10 md:flex-row">
            <div className="w-full mt-3 max-w-xl">
              <p className="text-md lg:text-xl text-gray-500 mb-8">
                Volunteering has a meaningful, positive impact on your community
                and it offers even greater benefits for you, the volunteer. The
                following is an example of one such benefit. Volunteering is the
                perfect vehicle to discover something you are really good at and
                to develop a new skill in.
              </p>
              <p className="text-md lg:text-xl text-gray-500 mb-8">
                We greatly appreciate your help as a volunteer at Cancer Support
                Network Foundation. With your help and support, we are able to
                achieve our goals and make sure nobody walks the cancer journey
                alone. God bless you for your support.
              </p>
              <h2 className="text-md md:text-2xl font-medium">
                (+233) 552-689-014
              </h2>
              <p className="text-md lg:text-xl text-gray-500 my-2">
                Available from 10:00 - 19:00
              </p>
              <p className="text-md lg:text-xl text-gray-500 my-2">
                Address: Teshie Nungua Estate, Avvcra
              </p>
              <p className="text-md lg:text-xl text-gray-500 my-2">
                Email: info@cancersupport.org
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}

      {/* Added Video */}
      <div className=" mt-[0.5rem] py-5">
        <div className="container mx-auto">
          <h2 className="mt-2 lg:mt-5 mb-3 text-lg lg:text-2xl text-center font-semibold text-gray-600 max-w-lg mx-auto">
            <span className="font-bold">
              Breast Cancer Awareness in Kenyasi
            </span>
          </h2>
          <video
            src="/vid2.mp4"
            width={"100%"}
            controls
            // autoPlay={true}
            // loop={true}
          ></video>

          <p className="text-md lg:text-xl mt-5 text-start md:text-center">
            As part of Breast Cancer Awareness Month, Cancer Support Network
            Foundation (CSNF) organized a health screening event at OLA Girls
            School in Kenyasi, Ahafo Region. Students and teachers were screened
            for breast cancer and also had checks for blood pressure and
            diabetes. This initiative is part of CSNF’s commitment to promoting
            early detection and providing accessible health care across Ghana.
          </p>
          <p className="text-md lg:text-xl mt-3 text-start md:text-center">
            We’re grateful to Adom Kase3 for highlighting our efforts in the
            community. Together, we can make a difference by raising awareness
            and supporting individuals in their health journeys.
          </p>
          <p className="text-md lg:text-xl mt-3 text-start md:text-center font-semibold">
            <Link to={"/support"} className="hover:underline">
              To support CSNF and help us continue these life-saving activities,
              Click here
            </Link>
          </p>
        </div>

        <div className="container mx-auto mt-5">
          <video
            src="/vid3.mp4"
            width={"100%"}
            controls
            // autoPlay={true}
            // loop={true}
          ></video>
        </div>
      </div>
      {/* Added Video */}

      <div className=" mt-[0.5rem] py-5">
        <div className="container mx-auto">
          <h2 className="mt-5 mb-3 text-lg lg:text-2xl text-center font-semibold text-gray-600 max-w-lg mx-auto">
            <span className="text-pink-600">Jennifer</span>{" "}
            <span className="font-bold">is battling rectal cancer</span> and
            needs our help for treatment expenses.
          </h2>
          <video
            src="/vid1.mp4"
            width={"100%"}
            controls
            // autoPlay={true}
            // loop={true}
          ></video>

          <p className="text-md lg:text-xl mt-5 text-start md:text-center">
            Jennifer is battling rectal cancer and needs our help for treatment
            expenses. Please consider donating to help support her fight.
          </p>
          <p className="text-md lg:text-xl mt-3 text-start md:text-center">
            Every contribution counts. Thank you for your kindness.
          </p>
          <p className="text-md lg:text-xl mt-3 text-start md:text-center font-semibold">
            <Link to={"/support"}>
              No Amount Is too small! Click below to Donate!!!
            </Link>
          </p>
        </div>
      </div>

      {/* Support Us Button */}
      <Link
        to={"/support"}
        className="block w-32 lg:w-48 text-md lg:text-2xl py-3 bg-pink-600 mt-5 mb-20 md:mb-32 rounded-lg mx-auto text-center text-white"
      >
        Support us
      </Link>
    </div>
  );
};

export default GetInvolved;
