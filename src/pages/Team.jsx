import { home_banner_bg } from "../assets";

const Team = () => {
  return (
    <div>
      {" "}
      {/* Hero Section 1 */}
      <div className="w-full min-h-[500px] bg-red-400 relative lg:min-h-[600px]">
        <img
          src={home_banner_bg}
          alt=""
          className="absolute left-0 right-0 bottom-0 w-full h-full object-cover"
        />
        <div className="absolute left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.5)]"></div>
        <div className="container mx-auto absolute left-0 right-0 bottom-0 w-full h-full z-10 flex items-center justify-center">
          <div className="font-poppins text-white">
            <h2 className="text-5xl font-bold relative lg:text-8xl">
              <span className="relative before:absolute before:w-full before:h-[15px] before:left-0 before:right-0 before:bottom-2 before:bg-blue-600 before:-z-10 lg:before:w-3/4 lg:before:h-[25px] lg:before:bottom-5">
                Team
              </span>{" "}
              of professionals
            </h2>
          </div>
        </div>
      </div>
      {/* Hero Section 2 */}
      <div className="mt-[3rem] pb-2 lg:pt-[3rem]">
        <div className="container mx-auto">
          <h2 className="text-xl text-center">Our Team</h2>
          <h2 className="text-3xl relative lg:text-6xl">
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px] lg:before:w-3/4 lg:before:bottom-4">
              The Board
            </span>
          </h2>
          <div className="mt-10 pb-5 rounded-b-lg flex items-center flex-col gap-10 md:flex-row">
            <div className="w-full mt-3 max-w-xl">
              <h2 className="text-lg lg:text-2xl font-medium">
                Dr. Juliet Appiah Quansah
              </h2>
              <p className="text-md lg:text-xl text-gray-500 mb-8">
                Chair / Founder
              </p>
              <h2 className="text-lg lg:text-2xl font-medium">
                Dr. Mark Dzradosi
              </h2>
              <p className="text-md lg:text-xl text-gray-500 mb-8">ViceChair</p>
              <h2 className="text-lg lg:text-2xl font-medium">
                Mrs. Juliet Gyamfi
              </h2>
              <p className="text-md lg:text-xl text-gray-500 mb-8">
                Board member
              </p>
              <h2 className="text-lg lg:text-2xl font-medium">
                Adelaide O. Dwamena
              </h2>
              <p className="text-md lg:text-xl text-gray-500 mb-8">
                Board member
              </p>
              <h2 className="text-lg lg:text-2xl font-medium">
                Benjamin Ato Quansah
              </h2>
              <p className="text-md lg:text-xl text-gray-500 mb-8">Treasure</p>
            </div>
          </div>
          <h2 className="text-3xl relative lg:text-6xl">
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px]  lg:before:w-3/4  lg:before:bottom-4">
              Team on the ground
            </span>
          </h2>
          <div className="mt-10 pb-5 rounded-b-lg flex items-center flex-col gap-10 md:flex-row">
            <div className="w-full mt-3 max-w-xl">
              <h2 className="text-lg lg:text-2xl font-medium">
                Dr. Juliet Appiah Quansah
              </h2>
              <p className="text-md lg:text-xl text-gray-500 mb-8">C.E.O</p>
              <h2 className="text-lg lg:text-2xl font-medium">
                Akwasi Osei Owusu
              </h2>
              <p className="text-md lg:text-xl text-gray-500 mb-8">President</p>
              <h2 className="text-lg lg:text-2xl font-medium">
                Benjamin Ato Quansah
              </h2>
              <p className="text-md lg:text-xl text-gray-500 mb-8">Treasure</p>
              <h2 className="text-lg lg:text-2xl font-medium">
                Kwame Osei Assibey
              </h2>
              <p className="text-md lg:text-xl text-gray-500 mb-8">
                Media & Publicity
              </p>
              <h2 className="text-lg lg:text-2xl font-medium">
                Richard Mumuni
              </h2>
              <p className="text-md lg:text-xl text-gray-500 mb-8">
                Media & Publicity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
