import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "./useSnackbar";

const useGenericMutation = ({
  mutationFn,
  successMessage,
  errorMessage,
  onSuccessCallback,
}) => {
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn,
    onError: () => {
      showSnackbar(errorMessage, "error");
    },
    onSuccess: () => {
      showSnackbar(successMessage, "success");
      onSuccessCallback?.();
    },
  });
};

export default useGenericMutation;
