import { PropTypes } from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import SimpleMDE from "react-simplemde-editor";
import { useCreateEvent, useUpdateEvent } from "../hooks/event-hook";
import ErrorMessage from "./ErrorMessage";
import Spinner from "./Spinner";
import z from "zod";
import "easymde/dist/easymde.min.css";

const EventForm = ({ event = {} }) => {
  const eventSchema = z.object({
    title: z
      .string({
        required_error: "Title is required",
      })
      .min(2, { message: "Title field should be at least 2 characters!" })
      .max(255),
    description: z
      .string({
        required_error: "Description is required",
      })
      .min(2, {
        message: "Description field should be at least 2 characters!",
      }),
    cover_image: z.any().nullable(),
    images: z.any().nullable(),
  });

  const isEditSession = Boolean(event.id);
  const [images, setImages] = useState();
  const [coverImage, setCoverImage] = useState();

  const { createEventMutation, isCreatingEvent } = useCreateEvent();
  const { updateEventMutation, isUpdatingEvent } = useUpdateEvent();

  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(eventSchema),
  });

  // Cover Image
  // Handle cover image
  const handleCoverImageChange = (event) => {
    setCoverImage(event.target.files[0]);
  };

  //   Image
  const handleImagesChange = (event) => {
    const imagesArray = [];

    for (let i = 0; i < event.target.files.length; i++) {
      imagesArray.push(event.target.files[i]);
    }

    setImages(imagesArray);
  };

  const onSubmit = (data) => {
    const formData = new FormData();

    if (!data.title || !data.description) return;

    if (isEditSession) {
      formData.append("_method", "PUT");

      coverImage && formData.append("cover_image", coverImage);

      images &&
        images?.forEach((file) => {
          formData.append("images[]", file);
        });
    } else {
      formData.append("cover_image", coverImage);

      images?.forEach((file) => {
        formData.append("images[]", file);
      });
    }

    formData.append("title", data.title);
    formData.append("description", data.description);

    if (isEditSession)
      updateEventMutation(
        { eventData: formData, slug: event.slug },
        {
          onSuccess: () => {
            navigate("/event");
          },
        }
      );
    else
      createEventMutation(formData, {
        onSuccess: () => {
          navigate("/event");
        },
      });
  };

  return (
    <div className="pb-20 pt-14 lg:pt-18">
      <h2 className="font-bold text-2xl mb-3">
        {isEditSession ? "Update Event" : "Add an Event"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div className="max-w-md">
          <label htmlFor="Title" className="inline-block text-primary mb-1">
            Title
          </label>
          <input
            type="text"
            {...register("title")}
            defaultValue={event?.title}
            id="Title"
            autoComplete="off"
            className="w-full relative m-0 inline-block min-w-[150px] flex-auto rounded border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition duration-300 ease-in-out focus:border-primary-600 focus:text-gray-700 focus:shadow-te-primary focus:outline-none"
            placeholder="Event Title..."
          />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </div>

        {/* Cover Image */}
        <div className="max-w-sm mt-5">
          <label
            htmlFor="CoverImage"
            className="inline-block text-primary mb-1"
          >
            Cover Image / Video{" "}
            <span className="text-elvann_primary_color text-sm">
              (50mb or less for videos)
            </span>
          </label>
          <input
            type="file"
            id="CoverImage"
            name="cover_image"
            accept="image/*,video/*"
            onChange={handleCoverImageChange}
            className="w-full relative m-0 inline-block min-w-[150px] flex-auto rounded border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition duration-300 ease-in-out focus:border-primary-600 focus:text-gray-700 focus:shadow-te-primary focus:outline-none"
          />
        </div>
        <ErrorMessage>{errors.cover_image?.message}</ErrorMessage>

        {/* Images */}
        <div className="max-w-sm mt-5">
          <label htmlFor="Images" className="inline-block text-primary mb-1">
            Images{" "}
            <span className="text-elvann_primary_color text-sm">
              (Optional)
            </span>
          </label>
          <input
            type="file"
            id="Images"
            name="images"
            accept="image/*"
            onChange={handleImagesChange}
            multiple
            className="w-full relative m-0 inline-block min-w-[150px] flex-auto rounded border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition duration-300 ease-in-out focus:border-primary-600 focus:text-gray-700 focus:shadow-te-primary focus:outline-none"
            placeholder="Two bed room house..."
          />
        </div>
        {/* )} */}
        <ErrorMessage>{errors.images?.message}</ErrorMessage>

        {/* Description */}
        <div className="max-w-3xl mt-5">
          <label
            htmlFor="Description"
            className="inline-block text-primary mb-1"
          >
            Description
          </label>
          <div>
            <Controller
              name="description"
              id="Description"
              control={control}
              defaultValue={event?.description}
              render={({ field }) => (
                <SimpleMDE
                  placeholder="Enter Description here...."
                  {...field}
                />
              )}
            />
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
          </div>
        </div>

        <div className="max-w-3xl flex items-center justify-between mt-5 gap-5">
          <Link
            to="/event"
            className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
            data-te-ripple-color="light"
          >
            Back
          </Link>
          <button
            type="submit"
            disabled={isCreatingEvent || isUpdatingEvent}
            className="bg-pink-600 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {isEditSession ? "Update Event" : "Add Event"}{" "}
            {(isCreatingEvent || isUpdatingEvent) && (
              <Spinner size="sm" color="primary-100" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

EventForm.propTypes = {
  client: PropTypes.object,
};

export default EventForm;
