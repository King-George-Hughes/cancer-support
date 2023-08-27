import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { Card_4 } from "../components";
import { event } from "../assets";
import { eventsData } from "../data/data";

const Event = () => {
  return (
    <div>
      {/* Hero Section 1 */}
      <div className="w-full min-h-[500px] bg-red-400 relative md:min-h-[600px]">
        <img
          src={event}
          alt=""
          className="absolute left-0 right-0 bottom-0 w-full h-full object-cover"
        />
        <div className="absolute left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.5)]"></div>
        <div className="container mx-auto absolute left-0 right-0 bottom-0 w-full h-full z-10 flex items-center justify-center">
          <div className="font-poppins text-white">
            <h2 className="text-5xl font-bold relative md:text-8xl">
              <span className="relative before:absolute before:w-full before:h-[15px] before:left-0 before:right-0 before:bottom-2 before:bg-blue-600 before:-z-10 md:before:w-3/4 md:before:h-[25px] md:before:bottom-5">
                Event
              </span>{" "}
              Details
            </h2>
          </div>
        </div>
      </div>

      {/* Hero Section 2 */}
      <div className="mt-[3rem] pb-5 md:pt-[3rem]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="container mx-auto"
        >
          <h2 className="text-xl text-center">Recent Events</h2>
          <h2 className="text-3xl relative md:text-6xl text-center">
            Here are{" "}
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 md:before:h-[20px] md:before:w-3/4 md:before:bottom-4">
              Up-coming,
            </span>{" "}
            Present, & Past events
          </h2>

          <div className="w-full flex flex-col items-start justify-center gap-10 py-10 md:flex-row md:flex-wrap">
            {eventsData.map((data, index) => {
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Event;
