import { Link } from "react-router-dom";
import { home_banner_bg } from "../assets";
import { survivorsData } from "../data/data";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";

const CancerSurvivorDetail = () => {
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
                Cancer Survivors Month
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-[3rem] py-5">
        <div className="container mx-auto">
          <h2 className="text-xl text-center">Recent Reports</h2>
          <h2 className="text-3xl relative lg:text-6xl text-center">
            Cancer{" "}
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px] lg:before:w-3/4 lg:before:bottom-4">
              Survivors
            </span>{" "}
            Month
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-10"
          >
            {survivorsData.map((news) => (
              <div
                key={news.id}
                className="w-full rounded-lg overflow-hidden shadow-md"
              >
                <Link to={`/survivor/${news.id}/${news.title}`}>
                  <div className="max-h-[320px] relative overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5 text-center">
                    <h2 className="text-lg font-semibold my-2 uppercase">
                      {news.title}
                    </h2>
                    <p className="text-gray-500">
                      {news.message[0].substring(0, 140)}....
                    </p>
                    <Link
                      to={`/survivor/${news.id}/${news.title}`}
                      className="bg-pink-500 text-white py-2 px-5 rounded-md mt-3 inline-block"
                    >
                      Read More
                    </Link>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CancerSurvivorDetail;
