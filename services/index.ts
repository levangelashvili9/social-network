import { LoginFormType, RegisterFormType } from "@/types";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

export const fetchCSRFToken = async () => {
  const response = await instance.get("/sanctum/csrf-cookie");
  return response;
};

export const registerUser = async (data: RegisterFormType) => {
  const response = await instance.post("/api/register", data);
  return response;
};

export const loginUser = async (data: LoginFormType) => {
  const response = await instance.post("/api/login", data);
  return response;
};
