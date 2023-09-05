"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "@/validations";
import { LoginFormType } from "@/types";

import {
  AuthHeading,
  AuthInput,
  AuthSubmit,
  LinkChanger,
} from "@/components/shared";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormType) => {
    console.log(data);
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
