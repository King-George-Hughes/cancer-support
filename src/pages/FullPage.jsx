import { useParams } from "react-router-dom";
import { eventsData } from "../data/data";
import { NavBar, Footer } from "../components";

const FullPage = () => {
  const { event_id, event_title } = useParams();
  const event = eventsData.find(
    (data) => data.id === +event_id && data.title === event_title
  );
  const { id, title, image, date, time } = event;

  return (
    <>
      <NavBar />

      <div className="container mx-auto mt-10">
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            <div className="w-full h-[320px] relative overflow-hidden bg-gray-50 rounded-md flex items-center justify-center md:h-[450px] group">
              <img
                src={"../" + image}
                alt=""
                className="absolute h-full rounded-t-lg group-hover:transform group-hover:scale-150 duration-500"
              />
            </div>
            <h2 className="text-pink-600 text-xl font-medium mt-8">#Online</h2>
            <h1 className="text-2xl text-center font-medium mt-3 md:text-5xl">
              {title}
            </h1>
          </div>

          <div className="w-full h-fit mt-12 md:w-1/3 md:mt-0 rounded-lg shadow-md">
            <h1 className="text-xl font-medium">Event details</h1>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FullPage;
