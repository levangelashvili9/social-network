"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "@/validations";
import { RegisterFormType } from "@/types";

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
        <input type="text" placeholder="sds" {...register("name")} />
        <input type="text" placeholder="sds" {...register("email")} />
        <input type="password" placeholder="sds" {...register("password")} />
        <input
          type="password"
          placeholder="sds"
          {...register("password_confirmation")}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
