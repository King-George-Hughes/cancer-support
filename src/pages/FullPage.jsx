import { useParams } from "react-router-dom";
import { eventsData } from "../data/data";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaCalendarAlt, FaBlog } from "react-icons/fa";

const FullPage = () => {
  const { event_id, event_title } = useParams();
  const event = eventsData.find(
    (data) => data.id === +event_id && data.title === event_title
  );
  const { title, image, date, category, location } = event;

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="w-full flex flex-col gap-10 lg:flex-row">
          <div className="w-full lg:w-2/3">
            <div className="w-full h-[300px] relative overflow-hidden bg-gray-50 rounded-md flex items-center justify-center lg:h-[450px] group">
              <img
                src={"../" + image}
                alt=""
                className="absolute h-full rounded-t-lg group-hover:transform group-hover:scale-125 duration-500"
              />
            </div>
            <h2 className="text-pink-600 text-xl font-medium mt-8">
              {category ? category : "#Online"}
            </h2>
            <h1 className="text-2xl text-center font-medium mt-3 lg:text-5xl">
              {title}
            </h1>
          </div>

          <div className="w-full h-fit mt-6 lg:w-1/3 md:mt-0 rounded-lg shadow-md p-5">
            <h1 className="text-xl font-medium">Event details</h1>
            <hr className="my-2" />
            <div className="inline-flex items-center w-full my-3">
              <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center shadow-none mr-3">
                <FaBlog size={15} />
              </div>
              <span className="text-gray-400 mr-2">Category: </span>
              <span className="font-medium text-gray-700">
                {category ? category : "Online Event"}
              </span>
            </div>
            <div className="inline-flex items-center w-full my-3">
              <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center shadow-none mr-3">
                <MdLocationPin size={15} />
              </div>
              <span className="text-gray-400 mr-2">Location: </span>
              <span className="font-medium text-gray-700">
                {location ? location : "Zoom App"}
              </span>
            </div>
            <div className="inline-flex items-center w-full my-3">
              <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center shadow-none mr-3">
                <FaCalendarAlt size={15} />
              </div>
              <span className="text-gray-400 mr-2">Date: </span>
              <span className="font-medium text-gray-700">{date}</span>
            </div>
            {!category && (
              <div className="inline-flex items-center w-full my-3">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center shadow-none mr-3">
                  <IoMdMail size={15} />
                </div>
                <span className="text-gray-400 mr-2">Zoom ID: </span>
                <span className="font-medium text-gray-700">2700012424</span>
              </div>
            )}
            <div className="inline-flex items-center w-full my-3">
              <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center shadow-none mr-3">
                <FaPhone size={15} />
              </div>
              <span className="text-gray-400 mr-2">Phone: </span>
              <span className="font-medium text-gray-700">
                +233 552 689 014
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullPage;
