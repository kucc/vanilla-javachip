import React from "react";
import PSessionContainer from "./PSessionContainer";

export default function SessionContainer() {
  const dummySession = [
    {
      title: "세션1",
      Leader: "홍길동",
      check: true,
      category: "sessions",
      id: 1,
    },
    {
      title: "세션2",
      Leader: "아무개",
      check: false,
      category: "sessions",
      id: 2,
    },
    {
      title: "세션3",
      Leader: "뭐시기",
      category: "sessions",
      check: true,
      id: 3,
    },
  ];
  return (
    <>
      {dummySession.map((session) => (
        <PSessionContainer
          key={session.id + session.category}
          id={session.id}
          title={session.title}
          category={session.category}
          sessionLeader={session.Leader}
          check={session.check}
        />
      ))}
    </>
  );
}
