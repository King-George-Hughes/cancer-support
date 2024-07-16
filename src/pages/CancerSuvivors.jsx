import { Link } from "react-router-dom";
// import { home_banner_bg } from "../assets";
import { sliderDataForCancerMonth, survivorsData } from "../data/data";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CancerSurvivorDetail = () => {
  // Slider
  const sliderBtn =
    "absolute bottom-[50%] text-center rounded-full p-2 border-none bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)] shadow-md";

  const slide = sliderDataForCancerMonth;
  const [index, setIndex] = useState(0);
  console.log(slide);

  const prevSlide = (e) => {
    e.preventDefault();
    setIndex(index - 1);
  };
  const nextSlide = (e) => {
    e.preventDefault();
    setIndex(index + 1);
  };

  useEffect(() => {
    const lastIndex = slide.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, slide]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div>
      {/* Hero Section 1 */}
      {/* <div className="w-full min-h-[400px] relative lg:min-h-[600px]">
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
      </div> */}

      {/* Hero Section */}
      <div className="section-center w-full min-h-[400px] flex items-center justify-center overflow-hidden relative lg:min-h-[600px]">
        {slide.map((data, personIndex) => {
          const { id, image } = data;

          let position = "nextSlide transform -translate-x-[100%]";
          if (personIndex === index) {
            position = "activeSlide opacity-100 transform translate-x-0";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === slide.length - 1)
          ) {
            position = "lastSlide transform translate-x-[100%]";
          }

          return (
            <article
              className={
                position +
                " absolute top-0 left-0 w-full h-full duration-500 p-[2rem] text-center opacity-0"
              }
              key={id}
            >
              <img
                src={image}
                alt=""
                className="absolute left-0 right-0 bottom-0 w-full h-full object-cover"
              />
              <div className="absolute left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.5)]"></div>
              <div className="container mx-auto absolute left-0 right-0 bottom-0 w-full h-full z-10 flex items-center justify-center">
                {/* Content */}
              </div>
            </article>
          );
        })}

        <button className={sliderBtn + " left-[5%]"} onClick={prevSlide}>
          <FaArrowLeft className="text-gray-800 text-xl lg:text-3xl" />
        </button>
        <button className={sliderBtn + " right-[5%]"} onClick={nextSlide}>
          <FaArrowRight className="text-gray-800 text-xl lg:text-3xl" />
        </button>
      </div>

      {/* Requested Changes */}
      <div className=" mt-[1rem] pb-5">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mt-5 mb-3 text-lg lg:text-2xl text-center font-semibold text-gray-600 max-w-lg mx-auto">
            <span className="text-purple-600">
              Celebrate National Cancer Survivors
            </span>{" "}
            <span className="font-bold">Month with us</span> this June in Ghana!
          </h2>

          <p className="text-md lg:text-xl mt-5 text-start md:text-center">
            Join us in honoring those who have triumphed over cancer and
            supporting those still fighting. Our planned activities for
            Ghana&apos;s inaugural Cancer Survivors Month includes a health
            walk, cancer awareness talk in secondary schools, a Zoom session
            where survivors share their stories, free health screening, and a
            GALA.
          </p>
          <p className="text-md lg:text-xl mt-3 text-start md:text-center">
            Your financial support will help us introduce and sustain this
            important initiative, educating the nation on cancer prevention,
            management, and survivorship.
          </p>
          <p className="text-md lg:text-xl mt-7 mb-10 text-center">
            <Link
              to={"/support"}
              className="inline-block border-2 border-purple-600 rounded-md px-5 py-2"
            >
              Click here to donate
            </Link>
          </p>
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
