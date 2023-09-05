"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "@/validations";
import { RegisterFormType } from "@/types";

import {
  AuthHeading,
  AuthInput,
  AuthSubmit,
  LinkChanger,
} from "@/components/shared";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormType) => {
    console.log(data);
  };

  return (
    <div>
      <AuthHeading text="Sign Up" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 mb-6">
          <AuthInput
            placeholder="Full Name"
            register={register}
            registerName="name"
            error={errors.name}
          />
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
          <AuthInput
            placeholder="Confirm Password"
            register={register}
            registerName="password_confirmation"
            error={errors.password_confirmation}
            type="password"
          />
        </div>
        <AuthSubmit text="Sign Up" />
      </form>
      <LinkChanger
        text="Already have an account?"
        button="Sign in"
        link="login"
      />
    </div>
  );
}
