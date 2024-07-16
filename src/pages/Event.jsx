import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { home_banner_bg } from "../assets";
import { Card_4 } from "../components";
import { eventsData, latestNews } from "../data/data";
const currentUrl = window.location.href;

const Event = () => {
  return (
    <div>
      <Helmet>
        <title>Events</title>
        <meta
          name="description"
          content="Showcase our news and events, Latest news and events are posted here."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      {/* Hero Section 1 */}
      <div className="w-full min-h-[400px] relative lg:min-h-[600px]">
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
                Event
              </span>{" "}
              Details
            </h2>
          </div>
        </div>
      </div>

      {/* Hero Section 2 */}
      <div className="mt-[3rem] pb-5 lg:pt-[3rem]">
        <div className="container mx-auto">
          <h2 className="text-xl text-center">Recent Events</h2>
          <h2 className="text-3xl relative lg:text-6xl text-center">
            Here are{" "}
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px] lg:before:w-3/4 lg:before:bottom-4">
              Up-coming,
            </span>{" "}
            Present, & Past events
          </h2>

          {/* Latest Events */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            {latestNews.map((news) => (
              <div
                key={news.id}
                className="w-full rounded-lg overflow-hidden shadow-md"
              >
                <Link to={`/recent/${news.id}/${news.title}`}>
                  <div>
                    <img src={news.image} alt={news.title} />
                  </div>

                  <div className="p-5 text-center">
                    <h2 className="text-lg font-semibold my-2 uppercase">
                      {news.title}
                    </h2>
                    <p className="text-gray-500">
                      {news.message[0].substring(0, 140)}....
                    </p>
                    <Link
                      to={`/recent/${news.id}/${news.title}`}
                      className="bg-pink-500 text-white py-2 px-5 rounded-md mt-3 inline-block"
                    >
                      Read More
                    </Link>
                  </div>
                </Link>
              </div>
            ))}
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default Event;
