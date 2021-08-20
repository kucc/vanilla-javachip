import React from "react";
import PSessionContainer from "./PSessionContainer";

export default function SessionContainer() {
  const dummySession = [
    {
      title: "세션1",
      Leader: "홍길동",
      check: true,
      category: "sessions",
      level: "초급",
      credit: 1,
      id: 1,
    },
    {
      title: "세션2",
      Leader: "아무개",
      check: false,
      category: "sessions",
      level: "초급",
      credit: 1,
      id: 2,
    },
    {
      title: "세션3",
      Leader: "뭐시기",
      category: "sessions",
      check: true,
      level: "초급",
      credit: 1,
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
          level={session.level}
          credit={session.credit}
        />
      ))}
    </>
  );
}
