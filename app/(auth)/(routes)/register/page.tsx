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
import { fetchCSRFToken, registerUser } from "@/services";

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormType) => {
    try {
      await registerUser(data);
      console.log(data);
      reset();
    } catch (error: any) {
      console.log(error.response.data);
    }
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
