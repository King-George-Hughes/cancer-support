import ReactMarkdown from "react-markdown";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import LightboxImages from "../components/LightboxImages";
import Spinner from "../components/Spinner";
import { useShowEvent } from "../hooks/event-hook";

const EventDetailPage = () => {
  const { showEvent, isShowingEvent } = useShowEvent();

  const currentPageUrl = window.location.href;

  return (
    <div className="container mx-auto">
      {isShowingEvent ? (
        <Spinner />
      ) : (
        <>
          <p>Loaded</p>
          <div className="w-full h-full flex flex-col pt-24 lg:pt-28">
            <h2 className="font-bold text-xl mb-1 uppercase">
              {showEvent?.title}
            </h2>

            {/* <div className="prose min-w-full my-4">
              <ReactMarkdown remarkPlugins={[remarkBreaks]}>
                {showEvent?.description}
              </ReactMarkdown>
            </div> */}

            <div className="min-w-full my-4 whitespace-pre-line">
              <ReactMarkdown>{showEvent?.description}</ReactMarkdown>
            </div>

            <p className="inline-flex items-center justify-start gap-2">
              <FacebookShareButton
                url={currentPageUrl}
                quote="Please share this post"
                hashtag={showEvent?.title}
              >
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>

              <WhatsappShareButton
                url={currentPageUrl}
                quote="Please share this post"
                hashtag={showEvent?.title}
              >
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>

              <TelegramShareButton
                url={currentPageUrl}
                quote="Please share this post"
                hashtag={showEvent?.title}
              >
                <TelegramIcon size={32} round={true} />
              </TelegramShareButton>
            </p>
          </div>

          <div className="w-full h-full flex flex-col md:flex-row md:flex-wrap pt-10">
            <LightboxImages
              images={[showEvent.cover_image, ...showEvent.images]}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default EventDetailPage;
