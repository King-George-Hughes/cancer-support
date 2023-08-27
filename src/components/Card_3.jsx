import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { FaCalendarAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const Card_3 = ({ title, image, date, message, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.4, 0.5)}
      className="card_2 w-full rounded-xl shadow-lg basis-1/3 flex-1 pb-5 group md:max-w-[420px]"
    >
      <div className="w-full h-[270px] lg:h-[300px] relative overflow-hidden">
        <img
          src={image}
          alt=""
          className="absolute left-0 right-0 bottom-0 w-full h-full rounded-t-lg group-hover:transform group-hover:rotate-6 group-hover:scale-125 duration-500"
        />
      </div>
      <div className="p-4">
        <h2 className="font-medium text-lg lg:text-2xl max-w-sm border-b-2 border-gray-200 py-3">
          {title}
        </h2>
        <h2 className="my-3 border-b-2 border-gray-200 pb-5 text-gray-500 text-md lg:text-lg">
          {message}
        </h2>
        <div className="flex items-center justify-between py-2">
          <div className="w-1/2 mt-4 flex items-center justify-start gap-5">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center shadow-none">
              <FaCalendarAlt size={18} />
            </div>
            <div className="">
              <h2 className="font-medium text-sm lg:text-md">Date:</h2>
              <h2 className="text-gray-600 text-sm lg:text-md">{date}</h2>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

Card_3.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.string,
  message: PropTypes.string,
  index: PropTypes.number,
};

export default Card_3;
