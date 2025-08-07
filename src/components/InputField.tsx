import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type: string;
  register: any;
  name: string;
   defaultValue?: string | number;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputField = ({
  label,
  type ,
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs text-gray-500">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 p-2 max-w-s outline-none pt-1.5 pb-1.5 pl-4 pr-3 bg-[#F2F2F2] w-[210px] rounded-md  hover:bg-gray-500/10 px-2 focus-within:ring-(--buttonColor)"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;