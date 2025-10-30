import { Helmet } from "react-helmet-async";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import removeMarkdown from "remove-markdown";
import { home_banner_bg } from "../assets";
import AuthComponent from "../components/AuthComponent";
import DeleteEventComponent from "../components/DeleteEventComponent";
import Spinner from "../components/Spinner";
import { useLogout } from "../hooks/auth-hook";
import { useEvents } from "../hooks/event-hook";
import Paginate from "../components/Paginate";

const currentUrl = window.location.href;

const Event = () => {
  const { events, isLoading } = useEvents();
  const { logoutMutation, isLoggingOut } = useLogout();

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
                All Event
              </span>
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

          {/* Add Button */}
          <AuthComponent>
            <div className="flex items-center justify-between mt-8">
              <Link
                disabled={isLoggingOut}
                className="w-[130px] bg-pink-600 text-white px-2 py-2 inline-flex items-center justify-center gap-2 text-center rounded-md"
                to="/event/create"
              >
                <FaPlus /> Add Event
              </Link>

              <button
                onClick={() => logoutMutation()}
                disabled={isLoggingOut}
                className="w-[130px] bg-red-600 text-white px-2 py-2 inline-flex items-center justify-center gap-2 text-center rounded-md"
              >
                <IoMdLogOut /> Logout{" "}
                {isLoggingOut && <Spinner size="sm" color="primary-100" />}
              </button>
            </div>
          </AuthComponent>

          {/* Latest Events */}
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
              {events?.data?.map((news) => (
                <div
                  key={news.id}
                  className="w-full relative rounded-lg overflow-hidden shadow-md"
                >
                  <Link to={`/event/${news.slug}`}>
                    <div className="w-full h-fit md:h-[220px] lg:h-[350px] overflow-hidden">
                      {news.cover_image.endsWith(".mp4") ||
                      news.cover_image.endsWith(".mov") ||
                      news.cover_image.endsWith(".wmv") ||
                      news.cover_image.endsWith(".avi") ? (
                        <div className="w-full h-fit md:h-[220px] lg:h-[350px] overflow-hidden">
                          <video
                            src={news.cover_image}
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-fit md:h-[220px] lg:h-[350px] overflow-hidden">
                          <img
                            src={news.cover_image}
                            alt={news.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>

                    <div className="p-5 text-center">
                      <h2 className="text-lg font-semibold my-2 uppercase">
                        {news.title}
                      </h2>

                      <p className="text-gray-500 line-clamp-2">
                        {removeMarkdown(news.description)}
                      </p>

                      <Link
                        to={`/event/${news.slug}`}
                        className="bg-pink-500 text-white py-2 px-5 rounded-md mt-3 inline-block"
                      >
                        Read More
                      </Link>
                    </div>
                  </Link>

                  <AuthComponent>
                    <div className="absolute w-full flex items-center justify-between pb-2 px-2 bottom-0">
                      <Link
                        to={`/event/${news.slug}/edit`}
                        className="w-[60px] bg-yellow-300 flex items-center gap-1 px-2 py-1 rounded-md"
                      >
                        <FaPencilAlt /> Edit
                      </Link>

                      <DeleteEventComponent slug={news.slug} />
                    </div>
                  </AuthComponent>
                </div>
              ))}
            </div>
          )}

          <div className="px-2 py-4">
            <Paginate
              count={events?.meta?.total}
              perPage={events?.meta?.per_page}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
