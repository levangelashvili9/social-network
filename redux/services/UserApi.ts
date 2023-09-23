import { UserDatatType } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    prepareHeaders: (headers) => {
      headers.set("X-XSRF-TOKEN", getCookie("XSRF-TOKEN")!.toString());
      return headers;
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getUserData: builder.query<UserDatatType, void>({
      query: () => "/api/user",
    }),
  }),
});

export const { useGetUserDataQuery } = userApi;
