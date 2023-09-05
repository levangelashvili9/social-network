import { LoginFormType, RegisterFormType } from "@/types";
import { FieldError, UseFormRegister } from "react-hook-form";

type Props = {
  label: string;
  registerName: keyof RegisterFormType | keyof LoginFormType;
  register: UseFormRegister<any>;
  // error: FieldError | undefined;
};

export const AuthInput: React.FC<Props> = ({
  label,
  registerName,
  register,
  // error,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" {...register(registerName)} />
    </div>
  );
};
