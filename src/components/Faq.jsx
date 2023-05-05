import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Faq = ({ id, title, show, message, showFaq }) => {
  return (
    <div className="w-full">
      {/* Top Side */}
      <div
        className={
          show
            ? "bg-pink-500 text-white w-full cursor-pointer flex items-center justify-between px-5 py-4 border-gray-200 border-2 rounded-sm duration-500"
            : "w-full cursor-pointer flex items-center justify-between px-5 py-4 border-gray-200 border-2 rounded-sm"
        }
        onClick={() => showFaq(id)}
      >
        <h1>{title}</h1>
        {show ? <FaArrowUp /> : <FaArrowDown />}
      </div>

      {/* Bottom Side */}
      <div
        className={
          show
            ? "block w-full h-fit visible opacity-100 px-5 py-5 border-gray-200 border-x-2 border-b-2 rounded-sm transform translate-y-0 duration-500 text-gray-500 overflow-hidden"
            : "w-full h-0 invisible opacity-0 px-5 border-gray-200 border-x-2 border-b-2 transform -translate-y-20 duration-100 text-gray-500 rounded-sm"
        }
      >
        <h1>{message}</h1>
      </div>
    </div>
  );
};

export default Faq;
