import React from "react";
import * as S from "../style";

function PSessionContainer({ title, sessionLeader, check }) {
  return (
    <>
      <S.SessionContainer>
        <S.SessionImg>
          {/* 이사이에 이미지 <img > 로 받아온 이미지 나중에 집어넣을 예정 */}
        </S.SessionImg>
        <S.SessionExplainWrapper>
          <S.SessionText>
            <S.SessionTitle>
              <p>{title}</p>
            </S.SessionTitle>
            <S.SessionExplain>
              <p>{sessionLeader} 세션장</p>
            </S.SessionExplain>
          </S.SessionText>
          {check ? (
            <S.SessionFavorite>수강중</S.SessionFavorite>
          ) : (
            <S.SessionFavorite>신청하기</S.SessionFavorite>
          )}
        </S.SessionExplainWrapper>
      </S.SessionContainer>
    </>
  );
}
export default PSessionContainer;
