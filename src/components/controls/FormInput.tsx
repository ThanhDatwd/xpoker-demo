import classNames from "classnames";
import { FC, ReactNode } from "react";

type IProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
  helper?: string;
  error?: string;
  label?: string;
  className?: string;
  underLine?: boolean;
  endIcon?: ReactNode;
};

const FormInput: FC<IProps> = (props) => {
  const {
    isError,
    helper,
    label,
    error,
    className,
    underLine,
    endIcon,
    ...rest
  } = props;
  return (
    <div className="text-start w-full ">
      {label && (
        <label
          className={`block mb-3 font-semibold ${
            isError ? "text-[#E53E3E]" : "text-gray-500"
          }`}
          htmlFor={rest.id}
        >
          {label}
        </label>
      )}
      <div
        className={`${classNames({
          "relative pr-6": endIcon,
        })} border border-gray-300 rounded-lg py-1`}
      >
        <input
          className={classNames(
            `text-[16px] leading-[28px] px-3 py-1 w-full bg-transparent focus:outline-0`,
            className,
          )}
          {...rest}
        />
        {endIcon}
      </div>
      {underLine && <div className="border-b border-white/[.1]" />}
      {!isError && helper ? (
        <p>{helper}</p>
      ) : (
        <p className="text-[#E53E3E] text-[12px]">{error}</p>
      )}
    </div>
  );
};

export default FormInput;
