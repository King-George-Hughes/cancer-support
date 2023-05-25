import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import PropTypes from "prop-types";

const BoardMember = ({ image, name, position, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.4, 0.5)}
      className="card_2 w-full rounded-xl shadow-lg md:w-1/4 bg-white"
    >
      <div className="w-full h-[350px] relative overflow-hidden md:h-[320px]">
        <img
          src={image}
          alt=""
          className="absolute left-0 right-0 bottom-0 w-full h-full object-cover rounded-t-lg hover:transform hover:scale-125 duration-500"
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="font-medium text-2xl max-w-sm py-3">{name}</h2>
        <h2 className="my-3  pb-2 text-gray-500 text-lg">{position}</h2>
      </div>
    </motion.div>
  );
};

BoardMember.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  position: PropTypes.string,
  index: PropTypes.number,
};

export default BoardMember;
