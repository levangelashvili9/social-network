import { LoginFormType, RegisterFormType } from "@/types";
import { ZodType, z } from "zod";

export const registerSchema: ZodType<RegisterFormType> = z
  .object({
    name: z.string().min(2).max(30),
    email: z.string().email(),
    password: z.string().min(5).max(20),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match!",
    path: ["password_confirmation"],
  });

export const loginSchema: ZodType<LoginFormType> = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(20),
});
