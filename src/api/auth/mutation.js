import { useMutation } from "react-query";
import { login } from "./api";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const useLoginMutation = ({ userId, userPassword }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  return useMutation(() => login({ userId, userPassword }), {
    onSuccess: () => {
      alert("로그인 성공");
      setIsLoggedIn(true);
    },
    onError: () => {
      alert("로그인 실패");
    },
  });
};
