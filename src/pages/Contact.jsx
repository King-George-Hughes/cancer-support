import { NavBar, Footer } from "../components";
import { contact_us } from "../assets";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <NavBar />

      {/* Hero Section 1 */}
      <div className="w-full min-h-[400px] bg-red-400 relative md:min-h-[500px]">
        <img
          src={contact_us}
          alt=""
          className="absolute left-0 right-0 bottom-0 w-full h-full object-cover"
        />
        <div className="absolute left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.5)]"></div>
        <div className="container mx-auto absolute left-0 right-0 bottom-0 w-full h-full z-10 flex items-center justify-center">
          <div className="font-poppins text-white">
            <h2 className="text-5xl font-bold relative md:text-8xl">
              <span className="relative before:absolute before:w-full before:h-[15px] before:left-0 before:right-0 before:bottom-2 before:bg-blue-600 before:-z-10 md:before:w-3/4 md:before:h-[25px] md:before:bottom-5">
                Contact Us
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Hero Section 2 */}
      <div className="mt-[3rem] pb-5 md:pt-[3rem]">
        <div className="container mx-auto">
          <h2 className="text-xl text-center">Contact with us</h2>
          <h2 className="text-3xl relative md:text-6xl text-center">
            Get in{" "}
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 md:before:h-[20px] md:before:w-3/4 md:before:bottom-4">
              touch
            </span>{" "}
            with us & stay updated
          </h2>
          <div className="mt-10 pb-5 rounded-b-lg flex items-center flex-col gap-10 md:flex-row">
            <div className="w-full md:w-1/2 mt-3">
              <div className="w-full flex shadow-xl p-5 rounded-lg items-start mb-10">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-cardColor_1 mr-6">
                  <MdLocationPin size={40} />
                </div>
                <div className="">
                  <h2 className="text-2xl font-medium mb-3">Address:</h2>
                  <p className="text-gray-500 text-lg">
                    13 Jungle Avenue, East Legon, Accra.
                  </p>
                  <p className="text-gray-500 text-lg">
                    Digital Address: GA-329-6150 Ghana
                  </p>
                </div>
              </div>
              <div className="w-full flex shadow-xl p-5 rounded-lg items-start mb-10">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-cardColor_2 mr-6">
                  <IoMdMail size={30} />
                </div>
                <div className="">
                  <h2 className="text-2xl font-medium mb-3">Email:</h2>
                  <p className="text-gray-500 text-lg">
                    info@cancersupportnf.org
                  </p>
                  <p className="text-gray-500 text-lg">
                    www.cancersupportnf.org
                  </p>
                </div>
              </div>
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
            <div className="w-full md:w-1/2">
              <div className="w-full">
                <h2 className="text-2xl font-medium">Leave us a message</h2>
                <form className="w-full">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full p-3 border-2 border-pink-500 outline-pink-400 my-2 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Email.."
                    className="w-full p-3 border-2 border-pink-500 outline-pink-400 my-2 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 border-2 border-pink-500 outline-pink-400 my-2 rounded-md"
                  />
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message..."
                    className="w-full p-3 border-2 border-pink-500 outline-pink-400 my-2 rounded-md"
                  ></textarea>
                  <button className="w-[150px] text-white text-lg p-3 rounded-md bg-pink-600">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
