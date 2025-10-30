import EventForm from "../../components/EventForm";
import Spinner from "../../components/Spinner";
import { useShowEvent } from "../../hooks/event-hook";
import AdminLayout from "../../layouts/AdminLayout";

const UpdateEventPage = () => {
  const { showEvent, isShowingEvent } = useShowEvent();

  return (
    <AdminLayout>
      <div className="w-full container mx-auto">
        {isShowingEvent ? <Spinner /> : <EventForm event={showEvent} />}
      </div>
    </AdminLayout>
  );
};

export default UpdateEventPage;
