import React from "react";
import { BiSearch } from "react-icons/bi";
import * as S from "../style";

function PMainSearch() {
  return (
    <>
      <S.SearchContainer>
        <S.SearchBar />
        <S.SearchBtn>
          <BiSearch />
        </S.SearchBtn>
      </S.SearchContainer>
    </>
  );
}
export default PMainSearch;
