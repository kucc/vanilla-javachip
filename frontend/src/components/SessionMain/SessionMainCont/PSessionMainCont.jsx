import React, { useState } from "react";
import { useHistory } from "react-router";

import * as S from "../style";

function PSessionMainCont({
  title,
  level,
  credit,
  intro,
  goal,
  day,
  people,
  placeHow,
  remember,
  check,
  category,
  id,
}) {
  const [nowState, setNowState] = useState("intro");
  const history = useHistory();
  const SmClick = () => {
    check === true
      ? window.alert("신청을 취소했습니다.")
      : window.alert("세션을 등록했습니다.");
  };

  return (
    <>
      <S.SessionHeader>
        <S.SessionHeaderCont>
          <S.SessionHeaderItem>
            <p onClick={() => setNowState("intro")}>세션 소개</p>
          </S.SessionHeaderItem>
          <S.SessionHeaderItem>
            <p onClick={() => setNowState("curri")}> 커리큘럼 </p>
          </S.SessionHeaderItem>
        </S.SessionHeaderCont>
        <S.SessionEdit>
          <p>수정하기</p>
        </S.SessionEdit>
      </S.SessionHeader>
      <S.SessionBottom>
        <S.SessionBottomHeader>
          <S.SessionContainer>
            <S.SessionImg>
              {/* 이사이에 이미지 <img > 로 받아온 이미지 나중에 집어넣을 예정 */}
            </S.SessionImg>
            <S.SessionTitle>
              <p>{title}</p>
            </S.SessionTitle>
            <S.SessionLevel>
              <p>
                난이도:{level} /{credit}학점
              </p>
            </S.SessionLevel>
          </S.SessionContainer>
        </S.SessionBottomHeader>
        {nowState === "intro" ? (
          <S.SessionBottomBox>
            <S.SessionIntroItem>
              <S.SessionIntroTitle>
                <p>세션 소개</p>
              </S.SessionIntroTitle>
              <S.SessionIntroExplain>
                <p>{intro}</p>
              </S.SessionIntroExplain>
            </S.SessionIntroItem>
            <S.SessionIntroItem>
              <S.SessionIntroTitle>
                <p>세션 목표</p>
              </S.SessionIntroTitle>
              <S.SessionIntroExplain>
                <p>{goal}</p>
              </S.SessionIntroExplain>
            </S.SessionIntroItem>
            <S.SessionIntroItem>
              <S.SessionIntroTitle>
                <p>진행 요일</p>
              </S.SessionIntroTitle>
              <S.SessionIntroExplain>
                <p>{day}</p>
              </S.SessionIntroExplain>
            </S.SessionIntroItem>
            <S.SessionIntroItem>
              <S.SessionIntroTitle>
                <p>참여 인원</p>
              </S.SessionIntroTitle>
              <S.SessionIntroExplain>
                <p>{people}</p>
              </S.SessionIntroExplain>
            </S.SessionIntroItem>
            <S.SessionIntroItem>
              <S.SessionIntroTitle>
                <p>진행 장소 및 방법</p>
              </S.SessionIntroTitle>
              <S.SessionIntroExplain>
                <p>{placeHow}</p>
              </S.SessionIntroExplain>
            </S.SessionIntroItem>
            <S.SessionIntroItem>
              <S.SessionIntroTitle>
                <p>유의 사항</p>
              </S.SessionIntroTitle>
              <S.SessionIntroExplain>
                <p>{remember}</p>
              </S.SessionIntroExplain>
            </S.SessionIntroItem>
          </S.SessionBottomBox>
        ) : (
          <S.SessionBottomBox>
            <S.SessionCurriItem>
              <S.SessionCurriTitle>
                <p>1주차</p>
              </S.SessionCurriTitle>
              <S.SessionCurriExplain>
                <p>{intro}</p>
              </S.SessionCurriExplain>
            </S.SessionCurriItem>
            <S.SessionCurriItem>
              <S.SessionCurriTitle>
                <p>2주차</p>
              </S.SessionCurriTitle>
              <S.SessionCurriExplain>
                <p>{goal}</p>
              </S.SessionCurriExplain>
            </S.SessionCurriItem>
            <S.SessionCurriItem>
              <S.SessionCurriTitle>
                <p>3주차</p>
              </S.SessionCurriTitle>
              <S.SessionCurriExplain>
                <p>{day}</p>
              </S.SessionCurriExplain>
            </S.SessionCurriItem>
            <S.SessionCurriItem>
              <S.SessionCurriTitle>
                <p>4주차</p>
              </S.SessionCurriTitle>
              <S.SessionCurriExplain>
                <p>{people}</p>
              </S.SessionCurriExplain>
            </S.SessionCurriItem>
            <S.SessionCurriItem>
              <S.SessionCurriTitle>
                <p>5주차</p>
              </S.SessionCurriTitle>
              <S.SessionCurriExplain>
                <p>{placeHow}</p>
              </S.SessionCurriExplain>
            </S.SessionCurriItem>
            <S.SessionCurriItem>
              <S.SessionCurriTitle>
                <p>6주차</p>
              </S.SessionCurriTitle>
              <S.SessionCurriExplain>
                <p>{remember}</p>
              </S.SessionCurriExplain>
            </S.SessionCurriItem>
            <S.SessionCurriItem>
              <S.SessionCurriTitle>
                <p>7주차</p>
              </S.SessionCurriTitle>
              <S.SessionCurriExplain>
                <p>{remember}</p>
              </S.SessionCurriExplain>
            </S.SessionCurriItem>
            <S.SessionCurriItem>
              <S.SessionCurriTitle>
                <p>8주차</p>
              </S.SessionCurriTitle>
              <S.SessionCurriExplain>
                <p>{remember}</p>
              </S.SessionCurriExplain>
            </S.SessionCurriItem>
          </S.SessionBottomBox>
        )}
      </S.SessionBottom>
      <S.SmbtnCont>
        <S.Smbtn
          onClick={() => history.push(`/detail/${category}/${id}/attendance`)}
        >
          출결보기
        </S.Smbtn>
        <S.Smbtn onClick={SmClick}>신청하기</S.Smbtn>
      </S.SmbtnCont>
    </>
  );
}
export default PSessionMainCont;
