import { LoginFormType, RegisterFormType } from "@/types";
import axios from "axios";
import { deleteCookie, setCookie } from "cookies-next";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      deleteCookie("is_user_logged_in");
      return Promise.reject();
    }
    return Promise.reject(error);
  }
);

export const fetchCSRFToken = async () => {
  const response = await instance.get("/sanctum/csrf-cookie");
  return response;
};

export const registerUser = async (data: RegisterFormType) => {
  await fetchCSRFToken();
  const response = await instance.post("/auth/register", data);
  return response;
};

export const loginUser = async (data: LoginFormType) => {
  await fetchCSRFToken();
  const response = await instance.post("/auth/login", data);
  setCookie("is_user_logged_in", "true");
  return response;
};

export const logoutUser = async () => {
  await instance.post("/auth/logout");
  deleteCookie("is_user_logged_in");
  window.location.reload();
};
