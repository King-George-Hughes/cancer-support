// import { useState } from "react";
import { useState } from "react";
import { about, bottom_bg } from "../assets";
import {
  brief,
  events,
  recently,
  boardMembers,
  faqs,
  faqs2,
} from "../data/data";
import {
  NavBar,
  Card,
  Card_2,
  Card_3,
  BoardMember,
  Footer,
  WhatsApp,
  Faq,
} from "./../components";

const Home = () => {
  const [faqData, setFaqData] = useState(faqs);
  const [faqData2, setFaqData2] = useState(faqs2);

  const showFaq = (id) => {
    console.log(`${id}: Clicked`);

    setFaqData((prevState) => {
      return prevState.map((data) => {
        return data.id === id ? { ...data, show: !data.show } : data;
      });
    });
    setFaqData2((prevState) => {
      return prevState.map((data) => {
        return data.id === id ? { ...data, show: !data.show } : data;
      });
    });
  };

  return (
    <div>
      <NavBar />

      {/* Hero Section 1 */}
      <div className="w-full min-h-[700px] bg-red-400 relative">
        <img
          src={bottom_bg}
          alt=""
          className="absolute left-0 right-0 bottom-0 w-full h-full object-cover"
        />
        <div className="absolute left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.5)]"></div>
        <div className="container mx-auto absolute left-0 right-0 bottom-0 w-full h-full z-10 flex items-center justify-start">
          <div className="font-poppins text-white">
            <h2 className="text-5xl font-bold relative md:text-8xl">
              <span className="relative before:absolute before:w-full before:h-[15px] before:left-0 before:right-0 before:bottom-2 before:bg-blue-600 before:-z-10 md:before:w-3/4 md:before:h-[25px] md:before:bottom-5">
                Welcome
              </span>{" "}
              to
            </h2>
            <h3 className="text-5xl max-w-sm mt-2 leading-tight md:text-7xl md:max-w-xl">
              Cancer Support Network Foundation
            </h3>
          </div>
        </div>
      </div>

      {/* Hero Section 2 */}
      <div className=" mt-[5rem] py-5">
        <div className="container mx-auto flex flex-col gap-16 md:flex-row md:gap-6">
          {brief.map((el) => {
            const { id, title, subtitle, image, color } = el;
            return (
              <Card
                key={id}
                title={title}
                subtitle={subtitle}
                image={image}
                color={color}
              />
            );
          })}
        </div>
      </div>

      {/* Hero Section 3 */}
      <div className="my-16 md:mt-20">
        <div className="container mx-auto flex items-center justify-between flex-col gap-10 md:flex-row">
          <img src={about} alt="" className="w-full md:w-1/2" />
          <div className="w-full md:w-1/2">
            <h2 className="mt-5 mb-3 text-2xl text-gray-600">
              Welcome to Cancer Support Network Foundation
            </h2>
            <h1 className="text-3xl relative font-medium md:text-5xl">
              A world of help{" "}
              <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 md:before:h-[20px] md:before:w-3/4 md:before:bottom-4">
                & inspiration
              </span>
            </h1>
            <h2 className="text-pink-600 text-2xl mt-10">
              For those affected by cancer
            </h2>
            <p className="text-xl mt-4">
              Cancer Support Network Foundation is a cancer care initiative.
            </p>
            <p className="text-gray-600 text-xl my-4">
              We are a not-for-profit organization born out of compassion, to
              care and support persons affected by cancer.
            </p>
            <p className="text-gray-600 text-xl my-4">
              Our primary goal is to help affected individuals and their
              families through their cancer journey, as we believe no one should
              journey alone.
            </p>
            <a
              href="#"
              className="flex items-center justify-center text-xl w-[200px] rounded-lg bg-pink-600 text-white px-8 py-4 mt-10"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section 4 */}
      <div className="mt-[3rem] py-5">
        <div className="container mx-auto">
          <h2 className="text-xl text-center">
            Present, Past & Upcoming Events
          </h2>
          <h2 className="text-3xl relative md:text-6xl text-center">
            Recent{" "}
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 md:before:h-[20px] md:before:w-3/4 md:before:bottom-4">
              Event
            </span>
          </h2>
          <div className="mt-10 pb-5 rounded-b-lg flex flex-col gap-10 md:flex-row">
            {events.map((data) => {
              const { id, title, image, date, time } = data;

              return (
                <Card_2
                  key={id}
                  time={time}
                  title={title}
                  image={image}
                  date={date}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero Section 5 */}
      <div className="mt-[3rem] pb-5 pt-[5rem] bg-bgColor">
        <div className="container mx-auto">
          <h2 className="text-xl text-center">News and Health tips</h2>
          <h2 className="text-3xl relative md:text-6xl text-center">
            What we have been{" "}
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 md:before:h-[20px] md:before:w-3/4 md:before:bottom-4">
              Up to
            </span>{" "}
            Recently
          </h2>
          <div className="mt-10 pb-5 rounded-b-lg flex flex-col gap-10 md:flex-row">
            {recently.map((data) => {
              const { id, title, image, date, message } = data;

              return (
                <Card_3
                  key={id}
                  message={message}
                  title={title}
                  image={image}
                  date={date}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero Section 6 */}
      <div className="mt-[3rem] py-5">
        <div className="container mx-auto">
          <h2 className="text-xl text-center">Faq</h2>
          <h2 className="text-3xl relative md:text-6xl text-center">
            Get quick{" "}
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 md:before:h-[20px] md:before:w-3/4 md:before:bottom-4">
              answers
            </span>{" "}
            to your favourite questions
          </h2>
          <div className="w-full flex flex-col md:flex-row md:py-3">
            <div className="mt-10 flex flex-col md:w-1/2 md:pb-5 md:mx-5">
              {faqData.map((data) => {
                const { id, show, title, message } = data;

                return (
                  <Faq
                    key={id}
                    id={id}
                    show={show}
                    title={title}
                    message={message}
                    showFaq={showFaq}
                  />
                );
              })}
            </div>
            <div className="pb-5 flex flex-col md:w-1/2 md:mt-10 md:mx-10">
              {faqData2.map((data) => {
                const { id, show, title, message } = data;

                return (
                  <Faq
                    key={id}
                    id={id}
                    show={show}
                    title={title}
                    message={message}
                    showFaq={showFaq}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section 7 */}
      <div className="mt-[3rem] pb-5 md:pt-[3rem]">
        <div className="container mx-auto">
          <h2 className="text-xl text-center">The Board</h2>
          <h2 className="text-3xl relative md:text-6xl text-center">
            We are here to help{" "}
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 md:before:h-[20px] md:before:w-3/4 md:before:bottom-4">
              strenghten
            </span>{" "}
            you
          </h2>
          <div className="mt-10 pb-5 rounded-b-lg flex flex-col gap-10 md:flex-row">
            {boardMembers.map((data) => {
              const { id, name, image, position } = data;

              return (
                <BoardMember
                  key={id}
                  position={position}
                  name={name}
                  image={image}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero Section 8 */}
      <div className="w-full min-h-[500px] bg-red-400 mt-5 relative md:min-h-[700px]">
        <img
          src={bottom_bg}
          alt=""
          className="absolute left-0 right-0 bottom-0 w-full h-full object-cover"
        />
        <div className="absolute left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.5)]"></div>
        <div className="container mx-auto absolute left-0 right-0 bottom-0 w-full h-full z-10 flex items-center justify-center">
          <div className="font-poppins text-white text-center">
            <h2 className="text-2xl text-center my-2">
              We are here to stop cancer
            </h2>
            <h2 className="text-4xl relative md:text-6xl text-center max-w-2xl">
              Join in as we{" "}
              <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 md:before:h-[20px] md:before:w-3/4 md:before:bottom-4">
                support
              </span>{" "}
              our own battle for freedom
            </h2>
            <a
              href="#"
              className="block w-48 text-2xl py-3 bg-pink-600 mt-20 rounded-lg mx-auto"
            >
              Support us
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Icon */}
      <WhatsApp />
    </div>
  );
};

export default Home;
