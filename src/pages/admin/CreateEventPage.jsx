import EventForm from "../../components/EventForm";
import AdminLayout from "../../layouts/AdminLayout";

const CreateEventPage = () => {
  return (
    <AdminLayout>
      <div className="w-full container mx-auto">
        <EventForm />
      </div>
    </AdminLayout>
  );
};

export default CreateEventPage;
