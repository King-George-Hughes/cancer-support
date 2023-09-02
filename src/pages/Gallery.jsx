import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { Card_5 } from "../components";
import { gallery } from "../assets";
import { galleryData } from "../data/data";

const Gallery = () => {
  return (
    <div>
      {/* Hero Section 1 */}
      <div className="w-full min-h-[400px] relative lg:min-h-[600px]">
        <img
          src={gallery}
          alt=""
          className="absolute left-0 right-0 bottom-0 w-full h-full object-cover"
        />
        <div className="absolute left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.5)]"></div>
        <div className="container mx-auto absolute left-0 right-0 bottom-0 w-full h-full z-10 flex items-center justify-center">
          <div className="font-poppins text-white">
            <h2 className="text-5xl font-bold relative  lg:text-8xl">
              <span className="relative before:absolute before:w-full before:h-[15px] before:left-0 before:right-0 before:bottom-2 before:bg-blue-600 before:-z-10  lg:before:w-3/4  lg:before:h-[25px]  lg:before:bottom-5">
                Event
              </span>{" "}
              Gallery
            </h2>
          </div>
        </div>
      </div>

      {/* Hero Section 2 */}
      <div className="mt-[3rem] pb-5 lg:pt-[3rem]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="container mx-auto"
        >
          <h2 className="text-xl text-center">Gallery</h2>
          <h2 className="text-3xl relative lg:text-6xl text-center">
            Check out{" "}
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px] lg:before:w-3/4 lg:before:bottom-4">
              some
            </span>{" "}
            of our works
          </h2>

          <div className="w-full flex flex-col items-start justify-center gap-10 py-10 md:flex-row md:flex-wrap">
            {galleryData.map((data, index) => {
              const { id, title, image } = data;

              return (
                <Card_5 key={id} title={title} image={image} index={index} />
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
