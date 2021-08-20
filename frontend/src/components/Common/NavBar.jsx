import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/userState";
import { Link, useHistory } from "react-router-dom";
import * as S from "./style";
import { logoutApi } from "../../utils";

export default function NavBar() {
  const history = useHistory();
  const data = useRecoilValue(userState);
  const [loginState, setloginState] = useState(data.isLogin);
  const username = data.name;
  const logout = async () => {
    try {
      const result = await logoutApi();
      if (result) {
        console.log(result);
        window.alert("로그아웃이 되었습니다!");
        window.location.replace("/");
        localStorage.clear();
        setloginState({
          ...loginState,
          isLogin: false,
        });
      }
    } catch (e) {
      console.log(e.response.data.error.msg);
      alert(e.response.data.error.msg);
    }
  };
  const google = async (e) => {
    window.location.replace(
      "http://taskagile.site/oauth2/authorization/google"
    );
    console.log(e);
  };
  return (
    <S.NavBarContainer>
      <S.NavBarLogoContainer>
        <Link to="/">
          <p>kucc</p>
        </Link>
        <Link to="/rules">
          <p>공지사항</p>
        </Link>
      </S.NavBarLogoContainer>
      <S.NavBarMenuContainer>
        {loginState === true ? (
          <S.NavBarAuth onClick={logout}>
            <p>{username} 님 안녕하세요</p>
            <p>로그아웃</p>
          </S.NavBarAuth>
        ) : (
          <S.NavBarAuth>
            <Link to="/login">
              <p>LOGIN</p>
            </Link>
            <Link to="/signup">
              <p>JOIN</p>
            </Link>
          </S.NavBarAuth>
        )}
      </S.NavBarMenuContainer>
    </S.NavBarContainer>
  );
}
