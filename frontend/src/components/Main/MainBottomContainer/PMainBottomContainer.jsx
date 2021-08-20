import React from "react";
import SessionContainer from "../SessionContainer";
import * as S from "../style";

function PMainBottomContainer() {
  return (
    <>
      <S.MainBottomWrapper>
        <S.MainBottomBtnCont>
          <S.MainSessDuration>
            <p>21-2학기</p>
          </S.MainSessDuration>
          <S.MainSessTab>
            <S.MainSessItem>
              <p>전체</p>
            </S.MainSessItem>
            <S.MainSessItem>
              <p>세션</p>
            </S.MainSessItem>
            <S.MainSessItem>
              <p>스터디</p>
            </S.MainSessItem>
          </S.MainSessTab>
          <S.MainSessRig>
            <p>등록</p>
          </S.MainSessRig>
        </S.MainBottomBtnCont>
        <SessionContainer />
      </S.MainBottomWrapper>
    </>
  );
}
export default PMainBottomContainer;
