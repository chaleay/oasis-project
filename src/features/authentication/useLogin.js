import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // manually set user in cache
      queryClient.setQueryData(["user"], user.user);
      toast.success("Successfully logged in");
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.error("Error", err);
      toast.error("Invalid credentials");
    },
  });

  return { login, isLoggingIn };
}
