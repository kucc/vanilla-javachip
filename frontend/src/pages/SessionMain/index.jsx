import React from "react";
import { LeaderBox, SessionMainCont } from "../../components/SessionMain";

function SessionMain({ match }) {
  const { category, id } = match.params;

  return (
    <>
      <LeaderBox />
      <SessionMainCont category={category} id={id} />
    </>
  );
}
export default SessionMain;
