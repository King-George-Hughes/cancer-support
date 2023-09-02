import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { round } from "../assets";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ title, subtitle, image, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.4, 0.5)}
      className={`bg-[#CAE4F7] w-full min-h-[200px] lg:min-h-[250px] rounded-xl flex items-end justify-center p-6 relative md:w-1/4`}
    >
      <div className="w-20 lg:w-28 h-20 lg:h-28 absolute rounded-full -top-12 shadow-xl drop-shadow-xl">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="">
        <h2 className="text-gray-500 text-md lg:text-xl">{title}</h2>
        <h1 className="text-lg lg:text-3xl font-medium">{subtitle}</h1>
        <Link to={"/about"}>
          <p className="text-pink-600 font-medium mt-2">More details...</p>
        </Link>
      </div>
      <img src={round} alt="" className="absolute right-8" />
    </motion.div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.string,
  index: PropTypes.number,
};

export default Card;
