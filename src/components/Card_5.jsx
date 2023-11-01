import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card_5 = ({ id, title, image, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.5)}
      className="card_2 w-full rounded-xl shadow-lg basis-1/3 flex-1 pb-2 group md:max-w-[420px] cursor-pointer"
    >
      <div className="w-full h-[350px] relative overflow-hidden">
        <Link to={`/gallery/${id}/${title}`}>
          <img
            src={image}
            alt={title}
            className="absolute left-0 right-0 bottom-0 w-full h-full rounded-t-lg group-hover:transform group-hover:rotate-6 group-hover:scale-125 duration-500"
          />
        </Link>
      </div>
      <div className="p-4">
        <h2 className="text-lg text-center max-w-sm py-2">{title}</h2>
      </div>
    </motion.div>
  );
};

Card_5.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  position: PropTypes.string,
  index: PropTypes.number,
};

export default Card_5;
