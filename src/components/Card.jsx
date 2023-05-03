import { round } from "../assets";

const Card = ({ title, subtitle, image }) => {
  return (
    <div className="w-full min-h-[250px] rounded-xl bg-blue-200 flex items-end justify-center p-6 relative md:w-1/4">
      <div className="w-28 h-28 absolute rounded-full -top-12 shadow-xl drop-shadow-xl">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="">
        <h2 className="text-gray-500 text-xl">{title}</h2>
        <h1 className="text-3xl font-medium">{subtitle}</h1>
        <p className="text-pink-600 font-medium mt-2">More details...</p>
      </div>
      <img src={round} alt="" className="absolute right-8" />
    </div>
  );
};

export default Card;
