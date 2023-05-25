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
        <div className="w-full md:w-2/3">
          <div className="w-full">
            <div className="w-full h-[420px] relative overflow-hidden bg-gray-50 rounded-md flex items-center justify-center group">
              <img
                src={"../" + image}
                alt=""
                className="absolute h-full rounded-t-lg group-hover:transform group-hover:rotate-6 group-hover:scale-125 duration-500"
              />
            </div>
            <h2 className="text-pink-600 text-xl font-medium mt-8">#Online</h2>
            <h1 className="text-2xl text-center font-medium mt-3 md:text-5xl">
              {title}
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FullPage;
