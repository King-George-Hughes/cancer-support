import React from "react";
import { Link, useParams } from "react-router-dom";
import { latestNews } from "../data/data";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const RecentNews = () => {
  const { recent_id, recent_title } = useParams();
  const recentArr = latestNews.find(
    (data) => data.id === +recent_id && data.title === recent_title
  );
  const { title, gallery, message } = recentArr;

  const currentPageUrl = window.location.href;

  return (
    <div className="container mx-auto mt-10">
      <div className="w-full h-full flex flex-col">
        <h2 className="font-bold text-xl mb-1">{title}</h2>

        {message.map((msg) => {
          if (
            msg.includes("Zelle") ||
            msg.includes("Cashapp") ||
            msg.includes("Momo") ||
            msg.includes("donate") ||
            msg.includes("Donate") ||
            msg.includes("God bless us all")
          ) {
            return (
              <p className="text-gray-900 font-semibold my-1 max-w-[850px]">
                {msg}
              </p>
            );
          }
          return <p className="text-gray-500 my-1 max-w-[850px]">{msg}</p>;
        })}

        <p className="inline-flex items-center justify-start gap-2">
          <FacebookShareButton
            url={currentPageUrl}
            quote="Please share this post"
            hashtag={title}
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>

          <WhatsappShareButton
            url={currentPageUrl}
            quote="Please share this post"
            hashtag={title}
          >
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>

          <TelegramShareButton
            url={currentPageUrl}
            quote="Please share this post"
            hashtag={title}
          >
            <TelegramIcon size={32} round={true} />
          </TelegramShareButton>
        </p>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row md:flex-wrap">
        {gallery.map((gal) => (
          <div className="w-full md:w-1/2 lg:w-1/4 h-[320px] p-5">
            <Link to={gal} target="_blank">
              <img
                src={gal}
                alt={title}
                className="w-full h-full object-cover rounded-lg cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNews;
