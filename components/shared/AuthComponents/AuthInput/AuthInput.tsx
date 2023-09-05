import { LoginFormType, RegisterFormType } from "@/types";
import { FieldError, UseFormRegister } from "react-hook-form";

type Props = {
  placeholder: string;
  registerName: keyof RegisterFormType | keyof LoginFormType;
  register: UseFormRegister<any>;
  error: FieldError | undefined;
};

export const AuthInput: React.FC<Props> = ({
  placeholder,
  registerName,
  register,
  error,
}) => {
  return (
    <div className="h-12">
      <input
        type="text"
        {...register(registerName)}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full h-full p-3 border outline-none rounded-md border-[#cfe7ff] focus:border-[#1089ff]"
      />
      {error && <p className="text-red-600 text-xs ml-1">{error.message}</p>}
    </div>
  );
};
