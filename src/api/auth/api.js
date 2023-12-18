import { instance } from "../instance/instance";
import Cookies from "js-cookie";

export const login = async ({ userId, userPassword }) => {
  const { data } = await instance.post(`/api/user`, { userId, userPassword });
  Cookies.set("token", data);
  return data;
};

export const loginCheck = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    console.log("로그인 상태");
    return true;
  } else {
    console.log("미로그인 상태");
    return false;
  }
};
