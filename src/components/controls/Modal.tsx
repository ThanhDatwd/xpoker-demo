import { useTheme } from "@/hooks/useTheme";
import { chooseTheme } from "@/utils/theme";
import { FC, ReactNode } from "react";

interface Props {
  isOpen: boolean;
  titleModal?: string;
  toggleOpenModal: () => void;
  onClick?: () => void;
  children: ReactNode;
}

export const Modal: FC<Props> = ({
  isOpen,
  titleModal,
  toggleOpenModal,
  children,
}) => {
  const { theme } = useTheme();
  return (
    <>
      {isOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-opacity-25 bg-zinc-400 backdrop-blur-sm transition-opacity" />

          <div className="fixed flex justify-center inset-0 z-10 overflow-y-auto">
            <div
              onClick={toggleOpenModal}
              className="flex justify-center flex-1 p-4 text-center items-center sm:p-0"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className={`${chooseTheme(
                  theme,
                  "bg-gradient-to-r from-[#E6E3F7] to-[#DFEAEE]",
                  "bg-gradient-to-r from-[#323544] to-[#354546]",
                )} sm:min-w-[450px] text-dark min-w-full relative overflow-hidden rounded-2xl shadow-xl sm:my-8 py-9 px-5 `}
              >
                <div className="w-full pb-4 sm:pb-4">
                  <div className="sm:flex sm:items-start items-center">
                    <div className="font-bold text-3xl ">{titleModal}</div>
                  </div>
                </div>
                <div className="w-full py-3 max-h-[300px] md:max-h-[500px] overflow-y-scroll">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
