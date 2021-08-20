import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as S from "./style";

export default function NavBar() {
  const history = useHistory();

  return (
    <S.NavBarContainer>
      <S.NavBarLogoContainer>
        <Link to="/">
          <p>kucc</p>
        </Link>
      </S.NavBarLogoContainer>
      <S.NavBarMenuContainer>
        <S.NavBarAuth>
          <Link to="/rules">
            <p>공지사항</p>
          </Link>
        </S.NavBarAuth>
        <S.NavBarAuth>
          <p> 안녕하세요</p>
          <p>로그아웃</p>
        </S.NavBarAuth>
        <S.NavBarAuth>
          <Link to="/signup">
            <p>회원가입</p>
          </Link>
          <Link to="/login">
            <p>로그인</p>
          </Link>
        </S.NavBarAuth>
      </S.NavBarMenuContainer>
    </S.NavBarContainer>
  );
}
