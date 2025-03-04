import { Helmet } from "react-helmet-async";
import { FaPhone } from "react-icons/fa";
import { about, home_banner_bg } from "../assets";
import { boardMembers } from "../data/data";
import { BoardMember } from "../components";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
const currentUrl = window.location.href;

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About us</title>
        <meta
          name="description"
          content="Cancer Support Network Foundation is a cancer care initiative.
                We are not for profit organization born out of compassion, to
                care and to support persons affected by cancer. Our primary goal
                is to help affected individuals and their families through their
                cancer journey, as we believe no one should journey alone."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

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
                About Us
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Hero Section 2 */}
      <div className="mt-[3rem] pb-5 lg:pt-[3rem]">
        <div className="container mx-auto">
          <h2 className="text-xl text-center">
            Welcome to Cancer Support Network Foundation
          </h2>
          <h2 className="text-3xl relative lg:text-6xl text-center">
            A world where{" "}
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px] lg:before:w-3/4 lg:before:bottom-4">
              cancer
            </span>{" "}
            will not exist
          </h2>
          <div className="mt-10 pb-5 rounded-b-lg flex items-center flex-col gap-10 lg:flex-row">
            <div className="w-full lg:w-1/2 mt-3">
              <h2 className="text-pink-600 text-xl lg:text-3xl font-medium">
                About Us
              </h2>
              <p className="text-gray-500 text-md lg:text-lg my-10">
                Cancer Support Network Foundation is a cancer care initiative.
                We are a non-profit organization born out of compassion, to care
                and to support persons affected by cancer. Our primary goal is
                to help affected individuals and their families through their
                cancer journey, as we believe no one should journey alone.
              </p>
              <img src={about} alt="" />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full">
                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium">
                  Mission
                </h2>
                <p className="text-gray-500 text-md lg:text-lg my-5">
                  Cancer Support Network Foundation’s mission is to provide help
                  and inspire those affected by cancer through education and
                  quality social and emotional support services.
                </p>
                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium">
                  Vision
                </h2>
                <p className="text-gray-500 text-md lg:text-lg my-5">
                  A world where lives are not threatened by cancer and no one
                  affected by cancer feels alone.
                </p>
                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium">
                  Direct Support
                </h2>
                <p className="text-gray-500 text-md lg:text-lg my-5">
                  Whether you want to learn about treatment options, get advice
                  on coping with side effects, or have questions about health
                  insurance, we’re here to help.
                </p>
                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium">
                  Our Focus
                </h2>
                <p className="text-gray-500 text-md lg:text-lg my-5">
                  We aim to educate the public about cancer, advocate for better
                  care and help strengthen and encourage patients to fight back
                  to good health.
                </p>
                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium">
                  Our Commitment
                </h2>
                <p className="text-gray-500 text-md lg:text-lg my-5">
                  We are committed to helping people affected by cancer through
                  support groups, educational forums, financial, physical and
                  emotional support services.
                </p>
                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium">
                  We journey with you
                </h2>
                <p className="text-gray-500 text-md lg:text-lg my-5">
                  We empower, educate and support affected persons through their
                  cancer journey. At Cancer Support Network Foundation, we truly
                  believe no one fights cancer alone.
                </p>
                <div className="w-full flex shadow-xl p-5 rounded-lg items-start">
                  <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center bg-cardColor_1 mr-6">
                    <FaPhone className="text-sm lg:text-xl" />
                  </div>
                  <div className="">
                    <h2 className="text-md lg:text-2xl font-medium mb-3">
                      Phone number:
                    </h2>
                    <p className="text-gray-500 text-md lg:text-lg">
                      +233 55 268 9014
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Hero Section 2 */}
        <div className="mt-[3rem] pb-2 lg:pt-[3rem]">
          <div className="container mx-auto">
            <h2 className="text-xl text-center">Our Team</h2>
            <h2 className="text-3xl relative lg:text-6xl text-center mb-14">
              We are here to help{" "}
              <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px] lg:before:w-3/4 lg:before:bottom-4">
                strenghten
              </span>{" "}
              you
            </h2>
            <h2 className="text-3xl relative lg:text-6xl">
              <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px] lg:before:w-3/4 lg:before:bottom-4">
                The Board
              </span>
            </h2>
            {/* <div className="mt-10 pb-5 rounded-b-lg flex items-center flex-col gap-10 md:flex-row">
            <div className="w-full mt-3 max-w-xl">
              <h2 className="text-lg lg:text-2xl font-medium">
                Dr. Juliet Appiah Quansah
              </h2>
              <p className="text-md lg:text-xl text-gray-500 mb-8">
                Chair / Founder
              </p>
              <h2 className="text-lg lg:text-2xl font-medium">
                Dr. Mark Dzradosi
              </h2>
              <p className="text-md lg:text-xl text-gray-500 mb-8">ViceChair</p>
              <h2 className="text-lg lg:text-2xl font-medium">
                Mrs. Juliet Gyamfi
              </h2>
              <p className="text-md lg:text-xl text-gray-500 mb-8">
                Board member
              </p>
              <h2 className="text-lg lg:text-2xl font-medium">
                Adelaide O. Dwamena
              </h2>
              <p className="text-md lg:text-xl text-gray-500 mb-8">
                Board member
              </p>
              <h2 className="text-lg lg:text-2xl font-medium">
                Benjamin Ato Quansah
              </h2>
              <p className="text-md lg:text-xl text-gray-500 mb-8">Treasurer</p>
            </div>
          </div> */}
            <div className="">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-10"
                // className="w-full flex flex-col items-start justify-center gap-10 py-10 md:flex-row md:flex-wrap"
              >
                {boardMembers.map((data, index) => {
                  const { id, name, image, position } = data;

                  return (
                    <BoardMember
                      key={id}
                      position={position}
                      name={name}
                      image={image}
                      index={index}
                    />
                  );
                })}
              </motion.div>
            </div>

            <h2 className="text-3xl relative lg:text-6xl">
              <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px]  lg:before:w-3/4  lg:before:bottom-4">
                Team on the ground
              </span>
            </h2>
            <div className="mt-10 pb-5 rounded-b-lg flex items-center flex-col gap-10 md:flex-row">
              <div className="w-full mt-3 max-w-xl">
                <h2 className="text-lg lg:text-2xl font-medium">
                  Dr. Juliet Appiah Quansah
                </h2>
                <p className="text-md lg:text-xl text-gray-500 mb-8">C.E.O</p>
                <h2 className="text-lg lg:text-2xl font-medium">
                  Akwasi Osei Owusu
                </h2>
                <p className="text-md lg:text-xl text-gray-500 mb-8">
                  President
                </p>
                <h2 className="text-lg lg:text-2xl font-medium">
                  Dr Naana Aboagye Asare
                </h2>
                <p className="text-md lg:text-xl text-gray-500 mb-8">
                  Vice Chair
                </p>
                <h2 className="text-lg lg:text-2xl font-medium">
                  Benjamin Ato Quansah
                </h2>
                <p className="text-md lg:text-xl text-gray-500 mb-8">
                  Treasurer
                </p>
                <h2 className="text-lg lg:text-2xl font-medium">
                  Ramatu Sumani
                </h2>
                <p className="text-md lg:text-xl text-gray-500 mb-8">
                  Orginzer
                </p>
                <h2 className="text-lg lg:text-2xl font-medium">
                  Ms Liticia Asumeng
                </h2>
                <p className="text-md lg:text-xl text-gray-500 mb-8">
                  Finance Team Member
                </p>
                <h2 className="text-lg lg:text-2xl font-medium">
                  Blaise Ackom
                </h2>
                <p className="text-md lg:text-xl text-gray-500 mb-8">
                  Secretary
                </p>
                <h2 className="text-lg lg:text-2xl font-medium">
                  Derrick Selorm
                </h2>
                <p className="text-md lg:text-xl text-gray-500 mb-8">
                  Media & Publicity
                </p>
                <h2 className="text-lg lg:text-2xl font-medium">
                  Richard Mumuni
                </h2>
                <p className="text-md lg:text-xl text-gray-500 mb-8">
                  Media & Publicity
                </p>
                <h2 className="text-lg lg:text-2xl font-medium">
                  Raissa Sambou
                </h2>
                <p className="text-md lg:text-xl text-gray-500 mb-8">
                  Media & Publicity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
