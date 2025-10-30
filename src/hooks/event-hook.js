import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import toast from "react-hot-toast";

export const apiEventUrl = "events";

export const useEvents = () => {
  const [searchParams] = useSearchParams();

  // Pagination
  let page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: events, isLoading } = useQuery({
    queryKey: [apiEventUrl, page],
    queryFn: async () => {
      const getPage = page ? `?page=${page}` : "";

      let apiUrl = apiEventUrl + getPage;

      let query = axiosClient
        .get(apiUrl)
        .then(({ data }) => {
          return data;
        })
        .catch((error) => {
          console.log(error);
          throw error;
        });

      return query;
    },
  });

  return { events, isLoading };
};

export const useShowEvent = () => {
  const { event_slug } = useParams();

  const { data: showEvent, isLoading: isShowingEvent } = useQuery({
    queryKey: [apiEventUrl, event_slug],
    queryFn: async () => {
      return axiosClient
        .get(`${apiEventUrl}/${event_slug}`)
        .then(({ data }) => {
          return data;
        })
        .catch((error) => {
          console.log(error);
          throw error;
        });
    },
  });

  return { showEvent, isShowingEvent };
};

export const useCreateEvent = () => {
  const queryClient = useQueryClient();

  const { mutate: createEventMutation, isPending: isCreatingEvent } =
    useMutation({
      mutationFn: async (client) => {
        return axiosClient
          .post(apiEventUrl, client)
          .then(() => {})
          .catch((error) => {
            console.log(error);
            throw error;
          });
      },

      onSuccess: () => {
        toast.success("Event successfully created!");

        queryClient.invalidateQueries({
          queryKey: [apiEventUrl],
        });
      },

      onError: (error) => toast.error(error.message),
    });

  return { createEventMutation, isCreatingEvent };
};

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();

  const { mutate: updateEventMutation, isPending: isUpdatingEvent } =
    useMutation({
      mutationFn: async ({ eventData, slug }) => {
        return axiosClient
          .post(`${apiEventUrl}/${slug}`, eventData)
          .then(() => {})
          .catch((error) => {
            console.log(error);
            throw error;
          });
      },

      onSuccess: () => {
        toast.success("Event successfully updated!");

        queryClient.invalidateQueries({
          queryKey: [apiEventUrl],
        });
      },

      onError: (error) => toast.error(error.message),
    });

  return { updateEventMutation, isUpdatingEvent };
};

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteEventMutation, isPending: isDeletingEvent } =
    useMutation({
      mutationFn: async (id) => {
        return axiosClient
          .delete(`/${apiEventUrl}/${id}`)
          .then(() => {})
          .catch((error) => {
            throw error;
          });
      },
      onSuccess: () => {
        toast.success("Event successfully deleted!");

        queryClient.invalidateQueries({
          queryKey: [apiEventUrl],
        });
      },

      onError: (error) => toast.error(error.message),
    });

  return { deleteEventMutation, isDeletingEvent };
};
