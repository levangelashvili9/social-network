"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { loginSchema } from "@/validations";
import { LoginFormType } from "@/types";

import {
  AuthHeading,
  AuthInput,
  AuthSubmit,
  LinkChanger,
} from "@/components/shared";
import { fetchCSRFToken, loginUser } from "@/services";

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormType) => {
    try {
      await loginUser(data);
      console.log(data);
      router.push("/");
      reset();
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <AuthHeading text="Sign In" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 mb-6">
          <AuthInput
            placeholder="Email"
            register={register}
            registerName="email"
            error={errors.email}
          />
          <AuthInput
            placeholder="Password"
            register={register}
            registerName="password"
            error={errors.password}
            type="password"
          />
        </div>
        <AuthSubmit text="Sign In" />
      </form>
      <LinkChanger text="Not a member?" button="Sign up now" link="register" />
    </div>
  );
}
