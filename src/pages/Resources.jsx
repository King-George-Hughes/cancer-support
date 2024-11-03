import { useState } from "react";
import { Faq } from "../components";
import { faqs, faqs2 } from "../data/data";

const Resources = () => {
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
      {/* Hero Section 6 */}
      <div className="py-5 pt-24 lg:pt-28">
        <div className="container mx-auto">
          <h2 className="text-xl text-center">Faq</h2>
          <h2 className="text-3xl relative lg:text-6xl text-center">
            Get quick{" "}
            <span className="relative before:absolute before:w-full before:h-[10px] before:left-0 before:right-0 before:bottom-1 before:bg-blue-600 before:-z-10 lg:before:h-[20px] lg:before:w-3/4 lg:before:bottom-4">
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
    </div>
  );
};

export default Resources;
