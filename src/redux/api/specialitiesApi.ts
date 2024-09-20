import { baseApi } from "./baseApi";

const specialitiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecaility: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: ["specialities"],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateSpecailityMutation } = specialitiesApi;
