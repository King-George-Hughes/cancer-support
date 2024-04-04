import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { about, volunteer } from "../assets";
import {
  brief,
  events,
  recently,
  boardMembers,
  faqs,
  faqs2,
  sliderData,
  latestNews,
} from "../data/data";
import {
  Card,
  Card_3,
  BoardMember,
  Faq,
  Layout,
  Card_4,
} from "./../components";
import { staggerContainer } from "../utils/motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [faqData, setFaqData] = useState(faqs);
  const [faqData2, setFaqData2] = useState(faqs2);

  const showFaq = (id) => {
    console.log(`${id}: Clicked`);

    setFaqData((prevState) => {
      return prevState.map((data) => {
        return data.id === id ? { ...data, show: !data.show } : data;
      });
    });
    setFaqData2((prevState) => {
      return prevState.map((data) => {
        return data.id === id ? { ...data, show: !data.show } : data;
      });
    });
  };

  // Slider
  const sliderBtn =
    "absolute bottom-[50%] text-center rounded-full p-2 border-none bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)] shadow-md";

  const slide = sliderData;
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
  // Slider

  return (
    <Layout>
      <div>
        {/* Hero Section 1 */}
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
                  <div className="font-poppins text-white">
                    <h2 className="text-3xl font-bold relative lg:text-6xl">
                      <span className="relative before:absolute before:w-full before:h-[15px] before:left-0 before:right-0 before:bottom-2 before:bg-blue-600 before:-z-10 lg:before:w-3/4 lg:before:h-[25px] lg:before:bottom-5">
                        Welcome
                      </span>{" "}
                      to
                    </h2>
                    <h3 className="text-3xl max-w-sm mt-2 leading-tight lg:text-5xl lg:max-w-xl">
                      Cancer Support Network Foundation
                      <br />
                      {/* {name} */}
                    </h3>
                  </div>
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

        <Link
          to={"/support"}
          className="block w-32 lg:w-48 text-md lg:text-2xl py-3 bg-pink-600 mt-20 rounded-lg mx-auto text-center text-white"
        >
          Support us
        </Link>

        {/* Hero Section 2 */}
        <div className=" mt-[5rem] py-5">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="container mx-auto flex flex-col gap-16 md:flex-row md:gap-6"
          >
            {brief.map((el, index) => {
              const { id, title, subtitle, image, color } = el;
              return (
                <Card
                  key={id}
                  title={title}
                  subtitle={subtitle}
                  image={image}
                  color={color}
                  index={index}
                />
              );
            })}
          </motion.div>
        </div>

        {/* Hero Section 3 */}
        <div className="my-16 lg:mt-20">
          <div className="container mx-auto flex items-center justify-between flex-col gap-10 lg:flex-row">
            <img src={about} alt="" className="w-full lg:w-1/2" />
            <div className="w-full lg:w-1/2">
              <h2 className="mt-5 mb-3 text-lg lg:text-2xl text-gray-600">
                Welcome to Cancer Support Network Foundation
              </h2>
              <h1 className="text-2xl relative font-medium lg:text-5xl">
                A world of help{" "}
                <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px] lg:before:w-3/4 lg:before:bottom-4">
                  & inspiration
                </span>
              </h1>
              <h2 className="text-pink-600 text-xl lg:text-2xl mt-10">
                For those affected by cancer
              </h2>
              <p className="text-md lg:text-xl mt-4">
                Cancer Support Network Foundation is a cancer care initiative.
              </p>
              <p className="text-gray-600 text-md lg:text-xl my-4">
                We are a not-for-profit organization born out of compassion, to
                care and support persons affected by cancer.
              </p>
              <p className="text-gray-600 text-md lg:text-xl my-4">
                Our primary goal is to help affected individuals and their
                families through their cancer journey, as we believe no one
                should journey alone.
              </p>
              <Link
                to="/about"
                className="flex items-center justify-center text-md lg:text-xl w-[150px] lg:w-[200px] rounded-lg bg-pink-600 text-white px-4 lg:px-8 py-2 lg:py-4 mt-10"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Section 4 */}
        <div className="mt-[3rem] py-5">
          <div className="container mx-auto">
            <h2 className="text-xl text-center">Recent Reports</h2>
            <h2 className="text-3xl relative lg:text-6xl text-center">
              Recent{" "}
              <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px] lg:before:w-3/4 lg:before:bottom-4">
                News
              </span>
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="w-full flex flex-col items-start justify-center gap-10 py-10 md:flex-row"
            >
              {latestNews.map((news) => (
                <div
                  key={news.id}
                  className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-md"
                >
                  <Link to={`/recent/${news.id}/${news.title}`}>
                    <div>
                      <img src={news.image} alt={news.title} />
                    </div>

                    <div className="p-5 text-center">
                      <h2 className="text-lg font-semibold my-2">
                        {news.title}
                      </h2>
                      <p className="text-gray-500">
                        {news.message[0].substring(0, 140)}....
                      </p>
                      <Link
                        to={`/recent/${news.id}/${news.title}`}
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

        {/* Hero Section 4 */}
        <div className="mt-[3rem] py-5">
          <div className="container mx-auto">
            <h2 className="text-xl text-center">
              Present, Past & Upcoming Events
            </h2>
            <h2 className="text-3xl relative lg:text-6xl text-center">
              Recent{" "}
              <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px] lg:before:w-3/4 lg:before:bottom-4">
                Event
              </span>
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="w-full flex flex-col items-start justify-center gap-10 py-10 md:flex-row md:flex-wrap"
            >
              {events.map((data, index) => {
                const { id, title, image, date, time } = data;

                return (
                  <Card_4
                    key={id}
                    id={id}
                    time={time}
                    title={title}
                    image={image}
                    date={date}
                    index={index}
                  />
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Hero Section 5 */}
        <div className="mt-[3rem] pb-5 pt-[5rem] bg-bgColor">
          <div className="container mx-auto">
            <h2 className="text-xl text-center">News and Health tips</h2>
            <h2 className="text-3xl relative md:text-6xl text-center">
              What we have been{" "}
              <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 md:before:h-[20px] md:before:w-3/4 md:before:bottom-4">
                Up to
              </span>{" "}
              Recently
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="w-full flex flex-col items-start justify-center gap-10 py-10 md:flex-row md:flex-wrap"
            >
              {recently.map((data, index) => {
                const { id, title, image, date, message } = data;

                return (
                  <Card_3
                    key={id}
                    message={message}
                    title={title}
                    image={image}
                    date={date}
                    index={index}
                  />
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Hero Section 6 */}
        <div className="mt-[3rem] py-5">
          <div className="container mx-auto">
            <h2 className="text-xl text-center">Faq</h2>
            <h2 className="text-3xl relative lg:text-6xl text-center">
              Get quick{" "}
              <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px] lg:before:w-3/4 lg:before:bottom-4">
                answers
              </span>{" "}
              to your favourite questions
            </h2>
            <div className="w-full flex flex-col md:flex-row md:py-3">
              <div className="mt-10 flex flex-col md:w-1/2 md:pb-5 md:mx-5">
                {faqData.map((data) => {
                  const { id, show, title, message } = data;

                  return (
                    <Faq
                      key={id}
                      id={id}
                      show={show}
                      title={title}
                      message={message}
                      showFaq={showFaq}
                    />
                  );
                })}
              </div>
              <div className="pb-5 flex flex-col md:w-1/2 md:mt-10 md:mx-10">
                {faqData2.map((data) => {
                  const { id, show, title, message } = data;

                  return (
                    <Faq
                      key={id}
                      id={id}
                      show={show}
                      title={title}
                      message={message}
                      showFaq={showFaq}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section 7 */}
        <div className="mt-[3rem] pb-5 lg:pt-[3rem]">
          <div className="container mx-auto">
            <h2 className="text-xl text-center">The Board</h2>
            <h2 className="text-3xl relative lg:text-6xl text-center">
              We are here to help{" "}
              <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px] lg:before:w-3/4 lg:before:bottom-4">
                strenghten
              </span>{" "}
              you
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="w-full flex flex-col items-start justify-center gap-10 py-10 md:flex-row md:flex-wrap"
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
        </div>

        {/* Hero Section 8 */}
        <div className="w-full min-h-[500px] bg-red-400 mt-5 relative lg:min-h-[700px]">
          <img
            src={volunteer}
            alt=""
            className="absolute left-0 right-0 bottom-0 w-full h-full object-cover"
          />
          <div className="absolute left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.5)]"></div>
          <div className="container mx-auto absolute left-0 right-0 bottom-0 w-full h-full z-10 flex items-center justify-center">
            <div className="font-poppins text-white text-center">
              <h2 className="text-lg lg:text-2xl text-center my-2">
                We are here to stop cancer
              </h2>
              <h2 className="text-2xl relative lg:text-6xl text-center max-w-2xl">
                Join in as we{" "}
                <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px] lg:before:w-3/4 lg:before:bottom-4">
                  support
                </span>{" "}
                our own battle for freedom
              </h2>
              <Link
                to={"/support"}
                className="block w-32 lg:w-48 text-md lg:text-2xl py-3 bg-pink-600 mt-20 rounded-lg mx-auto"
              >
                Support us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
