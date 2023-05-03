// import { useState } from "react";
import { NavBar, Card } from "./../components";
import { hero_bg } from "../assets";
import { brief } from "../data/data";

const Home = () => {
  console.log(brief);

  return (
    <div>
      <NavBar />

      {/* Hero Section 1 */}
      <div className="w-full min-h-[700px] bg-red-400 relative">
        <img
          src={hero_bg}
          alt=""
          className="absolute left-0 right-0 bottom-0 w-full h-full object-cover"
        />
        <div className="absolute left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.7)]"></div>
        <div className="container mx-auto absolute left-0 right-0 bottom-0 w-full h-full z-10 flex items-center justify-start">
          <div className="font-poppins text-white">
            <h2 className="text-5xl font-bold relative md:text-8xl">
              <span className="before:absolute before:w-2/4 before:h-[20px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 md:before:w-3/4">
                Welcome
              </span>{" "}
              to
            </h2>
            <h3 className="text-5xl max-w-sm mt-2 leading-tight md:text-7xl md:max-w-lg">
              Cancer Support Network Foundation
            </h3>
          </div>
        </div>
      </div>

      {/* Hero Section 2 */}
      <div className=" mt-[3rem] py-5">
        <div className="container mx-auto flex flex-col gap-16 md:flex-row md:gap-6">
          {brief.map((el) => {
            const { id, title, subtitle, image } = el;
            return (
              <Card key={id} title={title} subtitle={subtitle} image={image} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
