import { useParams } from "react-router-dom";
import { eventsData } from "../data/data";
import { NavBar, Footer } from "../components";

const FullPage = () => {
  const { event_id, event_title } = useParams();
  const event = eventsData.find(
    (data) => data.id === +event_id && data.title === event_title
  );
  console.log(event);
  const { id, title, image, date, time } = event;

  return (
    <>
      <NavBar />
      <Footer />
    </>
  );
};

export default FullPage;
