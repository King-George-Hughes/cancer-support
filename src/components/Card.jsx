import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { round } from "../assets";

const Card = ({ title, subtitle, image, color, index }) => {
  // console.log(color, typeof color);

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`bg-[#CAE4F7] w-full min-h-[250px] rounded-xl flex items-end justify-center p-6 relative md:w-1/4`}
    >
      <div className="w-28 h-28 absolute rounded-full -top-12 shadow-xl drop-shadow-xl">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="">
        <h2 className="text-gray-500 text-xl">{title}</h2>
        <h1 className="text-3xl font-medium">{subtitle}</h1>
        <p className="text-pink-600 font-medium mt-2">More details...</p>
      </div>
      <img src={round} alt="" className="absolute right-8" />
    </motion.div>
  );
};

export default Card;
