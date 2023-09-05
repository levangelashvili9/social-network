"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "@/validations";
import { RegisterFormType } from "@/types";

import { AuthInput } from "@/components/shared";

export default function Register() {
  const { register, handleSubmit } = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormType) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput label="Full Name" register={register} registerName="name" />
        <AuthInput label="Email" register={register} registerName="email" />
        <AuthInput
          label="Password"
          register={register}
          registerName="password"
        />
        <AuthInput
          label="Confirm Password"
          register={register}
          registerName="password_confirmation"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
