import React from "react";
import { loginApi, signupApi } from "../../../utils/auth";
import { useRecoilState } from "recoil";
import { userState } from "../../../recoil/userState";
import PSignupBox from "./PSignupBox";
import { useHistory } from "react-router";

export default function SignupBox() {
  const history = useHistory();
  const [loginState, setLoginState] = useRecoilState(userState);
  const signupHandler = async (email, password, name, link, comment) => {
    try {
      const check = await signupApi(email, password, name, link, comment);
      if (check) {
        const loginHandler = async (email, password) => {
          try {
            const result = await loginApi(email, password);
            const data = result.data;
            if (data) {
              window.alert(" 회원가입에 성공!");
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
        await loginHandler(email, password);
      }
    } catch (e) {
      console.log(e.response.data.error.msg);
      alert(e.response.data.error.msg);
    }
  };
  return (
    <>
      <PSignupBox signupHandler={signupHandler} />
    </>
  );
}
