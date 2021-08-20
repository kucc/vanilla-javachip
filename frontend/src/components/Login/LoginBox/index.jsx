import React from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginApi } from "../../../utils";
import PLoginBox from "./PLoginBox";
import { userState } from "../../../recoil/userState";

export default function LoginBox() {
  const history = useHistory();
  const [loginState, setLoginState] = useRecoilState(userState);
  const loginHandler = async (email, password) => {
    try {
      const result = await loginApi(email, password);
      const data = result.data;
      if (data) {
        window.alert("로그인에 성공!");
        setLoginState({
          ...loginState,
          isLogin: true,
          name: data.name,
          userId: data.id,
        });
        history.push("/");
      }
    } catch (e) {
      console.log(e.response.data.error.msg);
      alert(e.response.data.error.msg);
    }
  };
  return (
    <>
      <PLoginBox loginHandler={loginHandler} />
    </>
  );
}
