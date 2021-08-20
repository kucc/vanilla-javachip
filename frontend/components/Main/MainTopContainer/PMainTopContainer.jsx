import React from "react";
import MainSearch from "../MainSearch";
import * as S from "../style";

function PMainTopContainer() {
  return (
    <>
    <S.MainTopContainer>
      <S.MainTopWrapper>
        <S.MainTitle>
          <span>
            KUCC <br />
            길라잡이{" "}
          </span>
        </S.MainTitle>
        <S.MainExplain>
          <span>고려대학교 중앙 컴퓨터 동아리 세션관리시스템</span>
        </S.MainExplain>
      </S.MainTopWrapper>
      <MainSearch />
      </S.MainTopContainer>
    </>
  );
}
export default PMainTopContainer;
