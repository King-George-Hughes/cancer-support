import { useState } from "react";
import { useDeleteEvent } from "../hooks/event-hook";
import { FaTrash } from "react-icons/fa";
import Spinner from "./Spinner";

const DeleteEventComponent = ({ slug }) => {
  const [show, setShow] = useState(false);
  const { deleteEventMutation, isDeletingEvent } = useDeleteEvent();

  const onDelete = (id) => {
    deleteEventMutation(id, {
      onSuccess: () => {
        setShow(false);
      },
    });
  };
  return (
    <div>
      <button
        disabled={isDeletingEvent}
        onClick={() => setShow(true)}
        className="w-[80px] bg-red-600 text-white flex items-center gap-1 px-2 py-1 rounded-md"
      >
        <FaTrash /> Delete
      </button>

      {show && (
        <div className="absolute w-full h-[90px] p-2 -top-12 left-0 right-0 bottom-0 bg-red-100 shadow">
          <div>
            <p className="text-center mb-2">Are you sure you want to delete?</p>

            <div className="flex items-center justify-center gap-5">
              <button
                disabled={isDeletingEvent}
                onClick={() => setShow(false)}
                className="w-[80px] bg-gray-500 text-white flex items-center gap-1 px-2 py-1 rounded-md"
              >
                X Cancel
              </button>

              <button
                disabled={isDeletingEvent}
                onClick={() => onDelete(slug)}
                className="w-[80px] bg-red-600 text-white flex items-center gap-1 px-2 py-1 rounded-md"
              >
                <FaTrash /> Yes{" "}
                {isDeletingEvent && <Spinner size="sm" color="primary-100" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteEventComponent;
