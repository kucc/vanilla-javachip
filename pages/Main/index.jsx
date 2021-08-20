import React from "react";
import NavBar from "../../components/Common/NavBar";
import { MainTopContainer } from "../../components/Main";
import MainBottomContainer from "../../components/Main/MainBottomContainer";

function Main() {
  return (
    <>
      <NavBar />
      <MainTopContainer />
      <MainBottomContainer />
    </>
  );
}
export default Main;
