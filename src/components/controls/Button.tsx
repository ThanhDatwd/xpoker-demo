import classNames from "classnames";
import { FC, ReactNode } from "react";
import { LoadingSpinner } from "../LoadingSpinner";

interface CustomProps {
  text: string;
  textColor?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  className?: string;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}

type BType = React.ButtonHTMLAttributes<HTMLButtonElement> & CustomProps;

export const Button: FC<BType> = ({
  text,
  textColor,
  isLoading,
  onClick,
  className,
  iconStart,
  iconEnd,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "text-[17px] leading-[22px] bg-primary font-bold gap-4 flex text-center items-center justify-center rounded-full px-4 py-2 transition-all duration-300 enabled:hover:transform enabled:hover:scale-105 disabled:opacity-50 overflow-hidden group",
        className,
      )}
      {...rest}
    >
      {/* If not have icon we loading in front of text */}
      {isLoading && !iconStart && !iconEnd && (
        <div className="w-5 h-5">
          <LoadingSpinner />
        </div>
      )}

      {/* If have iconStart we loading into it */}
      {isLoading && iconStart ? (
        <div className="w-5 h-5">
          <LoadingSpinner />
        </div>
      ) : (
        iconStart && iconStart
      )}

      <span className={`${textColor ? textColor : "text-white pb-1"}`}>
        {text}
      </span>

      {/* If have iconEnd we loading into it */}
      {isLoading && iconEnd ? (
        <div className="w-5 h-5">
          <LoadingSpinner />
        </div>
      ) : (
        iconEnd && iconEnd
      )}
    </button>
  );
};
