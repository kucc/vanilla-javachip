import React from "react";
import PLeaderBox from "./PLeaderBox";

export default function LeaderBox() {
  const { name, intro, link } = {
    name: "박가영",
    intro: "안녕하세요",
    link: "rkdud007",
  };
  return (
    <>
      <PLeaderBox name={name} intro={intro} link={link} />
    </>
  );
}
