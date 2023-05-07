import { NavBar, Footer } from "../components";
import { event } from "../assets";

const Event = () => {
  return (
    <div>
      <NavBar />

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
        <div className="container mx-auto">
          <h2 className="text-xl text-center">Recent Events</h2>
          <h2 className="text-3xl relative md:text-6xl text-center">
            Here are{" "}
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 md:before:h-[20px] md:before:w-3/4 md:before:bottom-4">
              Up-coming,
            </span>{" "}
            Present, & Past events
          </h2>
          <div className="mt-10 pb-5 rounded-b-lg flex items-center flex-col gap-10 md:flex-row"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Event;
