import {
  support,
  home_banner_bg,
  visa,
  skrill,
  master_card,
  paypal,
} from "../assets";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div>
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
                Support Us
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Hero Section 2 */}
      <div className="mt-[3rem] pb-5 lg:pt-[3rem]">
        <div className="container mx-auto">
          <h2 className="text-xl text-center">
            Welcome to Cancer Support Ghana
          </h2>
          <h2 className="text-3xl relative lg:text-6xl text-center">
            Support{" "}
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px] lg:before:w-3/4 lg:before:bottom-4">
              Us
            </span>
          </h2>
          <div className="mt-10 pb-5 rounded-b-lg flex items-center flex-col gap-10 lg:flex-row">
            <div className="w-full lg:w-2/3 mt-3">
              <img src={support} alt="" />
            </div>
            <div className="w-full lg:w-1/3">
              <div className="w-full">
                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium">
                  Cedis Mechant Account
                </h2>
                <ol className="list-decimal ml-10">
                  <li className="text-gray-500 text-md lg:text-lg my-2">
                    Dial *718*803#
                  </li>
                  <li className="text-gray-500 text-md lg:text-lg my-2">
                    Enter Agent ID (181) you wish to pay
                  </li>
                  <li className="text-gray-500 text-md lg:text-lg my-2">
                    Enter amount
                  </li>
                  <li className="text-gray-500 text-md lg:text-lg my-2">
                    Enter 1 to confirm
                  </li>
                  <li className="text-gray-500 text-md lg:text-lg my-2">
                    2 to Decline
                  </li>
                  <li className="text-gray-500 text-md lg:text-lg my-2">
                    Enter MM pin to make payment.
                  </li>
                </ol>

                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium mt-5 lg:mt-10">
                  Access Bank
                </h2>
                <ul className="list-disc ml-10">
                  <li className="text-gray-500 text-md lg:text-lg my-2">
                    Name: Cancer Support Network Foundation
                  </li>
                  <li className="text-gray-500 text-md lg:text-lg my-2">
                    Cedi Account: 0070225809691 (SWIFT CODE: ABNGGHAC)
                  </li>
                  <li className="text-gray-500 text-md lg:text-lg my-2">
                    USD Account: 0071015809691
                  </li>
                </ul>

                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium mt-5 lg:mt-10">
                  MTN Momo
                </h2>
                <ul className="list-disc ml-10">
                  <li className="text-gray-500 text-md lg:text-lg my-2">
                    Number: 053 046 2998
                  </li>
                  <li className="text-gray-500 text-md lg:text-lg my-2">
                    Name: Cancer Support Network Foundation LBG
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="shadow-lg p-5 lg:p-10 mt-5 lg:mt-20 rounded-md border-2">
            <h2 className="text-pink-600 text-xl lg:text-3xl font-medium">
              We accept these payments
            </h2>
            <div className="flex items-center gap-2 lg:gap-5 mt-5">
              <img
                className="w-[65px] md:w-[100px] lg:w-fit"
                src={visa}
                alt="visa"
              />
              <img
                className="w-[65px] md:w-[100px] lg:w-fit"
                src={skrill}
                alt="skrill"
              />
              <img
                className="w-[65px] md:w-[100px] lg:w-fit"
                src={master_card}
                alt="mater-card"
              />
              <img
                className="w-[65px] md:w-[100px] lg:w-fit"
                src={paypal}
                alt="paypl"
              />
            </div>
            <Link
              to={"https://www.paypal.com/biz/fund?id=B7HXR6LVB49V8"}
              target="_blank"
              className="block w-52 lg:w-72 text-center text-md lg:text-2xl p-3 bg-pink-600 mt-8 rounded-lg text-white"
            >
              Donate Paypal Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
