import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { volunteer } from "../assets";
import { brief, latestNews } from "../data/data";
import { staggerContainer } from "../utils/motion";
import { Card, Layout } from "./../components";

const Home = () => {
  // Slider
  // const sliderBtn =
  //   "absolute bottom-[50%] text-center rounded-full p-2 border-none bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)] shadow-md";

  // const slide = sliderData;
  // const [index, setIndex] = useState(0);

  // const prevSlide = (e) => {
  //   e.preventDefault();
  //   setIndex(index - 1);
  // };
  // const nextSlide = (e) => {
  //   e.preventDefault();
  //   setIndex(index + 1);
  // };

  // useEffect(() => {
  //   const lastIndex = slide.length - 1;
  //   if (index < 0) setIndex(lastIndex);
  //   if (index > lastIndex) setIndex(0);
  // }, [index, slide]);

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 5000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [index]);
  // Slider

  return (
    <Layout>
      <div>
        {/* Hero Section 1 */}
        {/* <div className="section-center w-full min-h-[400px] flex items-center justify-center overflow-hidden relative lg:min-h-[600px]">
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
        </div> */}

        <div className="section-center w-full flex items-center justify-center overflow-hidden relative h-[600px]">
          <img
            src="../../public/images/slider/3.png"
            alt="bg-image"
            className="w-full h-full object-cover"
          />

          <div className="absolute bg-pink-500/60 backdrop-blur-md bottom-0 lg:right-0 h-1/2 lg:h-full w-full lg:w-1/2 flex items-center justify-center text-white">
            <div className="px-5 py-10">
              <h4 className="text-2xl lg:text-5xl font-semibold mb-2">
                Small acts, big impact.
              </h4>
              <p className="text-lg max-w-md mb-8 lg:mb-12">
                Join the movement to save lives of persons affected by cancer.
              </p>

              <div className="inline-flex flex-col lg:flex-row gap-5">
                <Link
                  to={"/support"}
                  className="bg-white text-pink-600 px-5 py-2 inline-flex items-center gap-2 rounded-md text-lg font-semibold"
                >
                  {" "}
                  <FaHeart /> Donate Now
                </Link>
                <Link
                  to={"/about"}
                  className="border-2 text-white px-5 py-2 inline-flex items-center gap-2 rounded-md text-lg font-semibold"
                >
                  Learn more about our work.
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className=" mt-[0.5rem] py-5">
          <div className="container mx-auto">
            <h2 className="mt-5 mb-3 text-lg lg:text-2xl text-center font-semibold text-gray-600 max-w-lg mx-auto">
              We <span className="text-pink-600">Care </span> And{" "}
              <span className="text-pink-600">Support.</span>
            </h2>

            <p className="text-md lg:text-xl text-start md:text-center">
              We are an NGO committed to supporting persons affected by cancer,
              throughout their journey.
            </p>
          </div>
        </div>

        {/* Hero Section 2 */}
        <div className=" mt-[5rem] py-5">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-5"
            // className="container mx-auto flex flex-col gap-16 md:flex-row md:gap-6"
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
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-10"
            >
              {latestNews.map((news) => (
                <div
                  key={news.id}
                  className="w-full rounded-lg overflow-hidden shadow-md"
                >
                  <Link to={`/recent/${news.id}/${news.title}`}>
                    <div>
                      <img src={news.image} alt={news.title} />
                    </div>

                    <div className="p-5 text-center">
                      <h2 className="text-lg font-semibold my-2 uppercase">
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

{
  /* <div className="font-poppins text-white">
                    <h2 className="text-3xl font-bold relative lg:text-6xl">
                      <span className="relative before:absolute before:w-full before:h-[15px] before:left-0 before:right-0 before:bottom-2 before:bg-blue-600 before:-z-10 lg:before:w-3/4 lg:before:h-[25px] lg:before:bottom-5">
                        Welcome
                        June
                      </span>{" "}
                      to
                      is
                    </h2>
                    <h3 className="text-3xl max-w-sm mt-2 leading-tight lg:text-5xl lg:max-w-xl">
                      Cancer Support Network Foundation
                      Cancer Survivors Month! Hurrayyyyy!!!
                      <br />
                      {name}
                    </h3>
                  </div> */
}
