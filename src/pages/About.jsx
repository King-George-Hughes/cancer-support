import { NavBar, Footer } from "../components";
import { about_us, about } from "../assets";
import { FaPhone } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <NavBar />

      {/* Hero Section 1 */}
      <div className="w-full min-h-[500px] bg-red-400 relative md:min-h-[600px]">
        <img
          src={about_us}
          alt=""
          className="absolute left-0 right-0 bottom-0 w-full h-full object-cover"
        />
        <div className="absolute left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.5)]"></div>
        <div className="container mx-auto absolute left-0 right-0 bottom-0 w-full h-full z-10 flex items-center justify-center">
          <div className="font-poppins text-white">
            <h2 className="text-5xl font-bold relative md:text-8xl">
              <span className="relative before:absolute before:w-full before:h-[15px] before:left-0 before:right-0 before:bottom-2 before:bg-blue-600 before:-z-10 md:before:w-3/4 md:before:h-[25px] md:before:bottom-5">
                About Us
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Hero Section 2 */}
      <div className="mt-[3rem] pb-5 md:pt-[3rem]">
        <div className="container mx-auto">
          <h2 className="text-xl text-center">
            Welcome to Cancer Support Ghana
          </h2>
          <h2 className="text-3xl relative md:text-6xl text-center">
            A world where{" "}
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 md:before:h-[20px] md:before:w-3/4 md:before:bottom-4">
              cancer
            </span>{" "}
            will not exists
          </h2>
          <div className="mt-10 pb-5 rounded-b-lg flex items-center flex-col gap-10 md:flex-row">
            <div className="w-full md:w-1/2 mt-3">
              <h2 className="text-pink-600 text-3xl font-medium">About Us</h2>
              <p className="text-gray-500 text-lg my-10">
                Cancer Support Network Foundation is a cancer care initiative.
                We are not for profit organization born out of compassion, to
                care and to support persons affected by cancer. Our primary goal
                is to help affected individuals and their families through their
                cancer journey, as we believe no one should journey alone.
              </p>
              <img src={about} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full">
                <h2 className="text-pink-600 text-3xl font-medium">Mission</h2>
                <p className="text-gray-500 text-lg my-5">
                  Cancer Support Network Foundation’s mission is to provide help
                  and inspire those affected by cancer through education and
                  quality social and emotional support services.
                </p>
                <h2 className="text-pink-600 text-3xl font-medium">Vision</h2>
                <p className="text-gray-500 text-lg my-5">
                  A world where lives are not threatened by cancer and no one
                  affected by cancer feels alone.
                </p>
                <h2 className="text-pink-600 text-3xl font-medium">
                  Direct Support
                </h2>
                <p className="text-gray-500 text-lg my-5">
                  Whether you want to learn about treatment options, get advice
                  on coping with side effects, or have questions about health
                  insurance, we’re here to help.
                </p>
                <h2 className="text-pink-600 text-3xl font-medium">
                  Our Focus
                </h2>
                <p className="text-gray-500 text-lg my-5">
                  We aim to educate the public about cancer, advocate for better
                  care and help strengthen and encourage patients to fight back
                  to good health.
                </p>
                <h2 className="text-pink-600 text-3xl font-medium">
                  Our Commitment
                </h2>
                <p className="text-gray-500 text-lg my-5">
                  We are committed to helping people affected by cancer through
                  support groups, educational forums, financial, physical and
                  emotional support services.
                </p>
                <h2 className="text-pink-600 text-3xl font-medium">
                  We journey with you
                </h2>
                <p className="text-gray-500 text-lg my-5">
                  We empower, educate and support affected persons through their
                  cancer journey. At Cancer Support Network Foundation, we truly
                  believe no one fights cancer alone.
                </p>
                <div className="w-full flex shadow-xl p-5 rounded-lg items-start">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-cardColor_1 mr-6">
                    <FaPhone size={25} />
                  </div>
                  <div className="">
                    <h2 className="text-2xl font-medium mb-3">Phone number:</h2>
                    <p className="text-gray-500 text-lg">+233 55 268 9014</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
