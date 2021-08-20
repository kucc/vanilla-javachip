import React from "react";
import MainSearch from "../MainSearch";
import * as S from "../style";

function PMainTopContainer() {
  return (
    <>
      <S.MainTopWrapper>
        <S.MainTitle>
          <p>
            KUCC 세션 <br />
            길라잡이{" "}
          </p>
        </S.MainTitle>
        <S.MainExplain>
          <p>고려대학교 중앙 컴퓨터 동아리 세션관리시스템</p>
        </S.MainExplain>
      </S.MainTopWrapper>
      <MainSearch />
    </>
  );
}
export default PMainTopContainer;
