import { useParams } from "react-router-dom";
import {
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import { survivorsData } from "../data/data";

import { FacebookIcon, TelegramIcon, WhatsappIcon } from "react-share";
import LightboxImages from "../components/LightboxImages";

const CancerSurvivorDetail = () => {
  const { recent_id, recent_title } = useParams();
  const recentArr = survivorsData.find(
    (data) => data.id === +recent_id && data.title === recent_title
  );
  const { title, gallery, message } = recentArr;

  const currentPageUrl = window.location.href;

  return (
    <div className="container mx-auto mt-10">
      <div className="w-full h-full flex flex-col">
        <h2 className="font-bold text-xl mb-1">{title}</h2>

        {message.map((msg, index) => {
          if (
            msg.includes("Zelle") ||
            msg.includes("Cashapp") ||
            msg.includes("Momo") ||
            msg.includes("donate") ||
            msg.includes("Donate") ||
            msg.includes("God bless us all")
          ) {
            return (
              <p
                key={index}
                className="text-gray-900 font-semibold my-1 max-w-[850px]"
              >
                {msg}
              </p>
            );
          }
          return (
            <p key={index} className="text-gray-500 my-1 max-w-[850px]">
              {msg}
            </p>
          );
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
      <div className="w-full h-full flex flex-col md:flex-row md:flex-wrap pt-10">
        <LightboxImages images={gallery} />
      </div>
    </div>
  );
};

export default CancerSurvivorDetail;
