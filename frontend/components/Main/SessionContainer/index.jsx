import React from "react";
import PSessionContainer from "./PSessionContainer";

export default function SessionContainer() {
  const dummySession = [
    {
      title: "세션1",
      sessionLeader: "홍길동",
      check: true,
    },
    {
      title: "세션2",
      sessionLeader: "아무개",
      check: false,
    },
    {
      title: "세션3",
      sessionLeader: "뭐시기",
      check: true,
    },
  ];
  return (
    <>
      {dummySession.map((session) => (
        <PSessionContainer
          title={session.title}
          sessionLeader={session.sessionLeader}
          check={session.check}
        />
      ))}
    </>
  );
}
