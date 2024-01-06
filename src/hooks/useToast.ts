import { DEFAULT_AUTOCLOSE_TOAST } from "@/utils/constants";
import { toast, TypeOptions } from "react-toastify";

export const onToast = (
  message: string,
  type: TypeOptions = "default",
  autoClose: number = DEFAULT_AUTOCLOSE_TOAST,
) => {
  toast(message, {
    type,
    position: "top-right",
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
