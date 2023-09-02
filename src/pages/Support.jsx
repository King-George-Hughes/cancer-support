import { support } from "../assets";

const Support = () => {
  return (
    <div>
      {/* Hero Section 1 */}
      <div className="w-full min-h-[500px] bg-red-400 relative lg:min-h-[600px]">
        <img
          src={support}
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
            <div className="w-full lg:w-1/2 mt-3">
              <img src={support} alt="" />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full">
                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium">
                  Mission
                </h2>
                <p className="text-gray-500 text-md lg:text-lg my-5">
                  Cancer Support Network Foundation’s mission is to provide help
                  and inspire those affected by cancer through education and
                  quality social and emotional support services.
                </p>
                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium">
                  Vision
                </h2>
                <p className="text-gray-500 text-md lg:text-lg my-5">
                  A world where lives are not threatened by cancer and no one
                  affected by cancer feels alone.
                </p>
                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium">
                  Direct Support
                </h2>
                <p className="text-gray-500 text-md lg:text-lg my-5">
                  Whether you want to learn about treatment options, get advice
                  on coping with side effects, or have questions about health
                  insurance, we’re here to help.
                </p>
                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium">
                  Our Focus
                </h2>
                <p className="text-gray-500 text-md lg:text-lg my-5">
                  We aim to educate the public about cancer, advocate for better
                  care and help strengthen and encourage patients to fight back
                  to good health.
                </p>
                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium">
                  Our Commitment
                </h2>
                <p className="text-gray-500 text-md lg:text-lg my-5">
                  We are committed to helping people affected by cancer through
                  support groups, educational forums, financial, physical and
                  emotional support services.
                </p>
                <h2 className="text-pink-600 text-xl lg:text-3xl font-medium">
                  We journey with you
                </h2>
                <p className="text-gray-500 text-md lg:text-lg my-5">
                  We empower, educate and support affected persons through their
                  cancer journey. At Cancer Support Network Foundation, we truly
                  believe no one fights cancer alone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
