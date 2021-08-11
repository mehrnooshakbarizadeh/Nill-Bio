import React from "react";

import TimeLineItem from "./TimeLineItem";

export default function TimeLine({
  children,
}: {
  children: React.ReactElement<typeof TimeLineItem>;
}) {
  return (
    <>
      <div className="convexBackground">
        <div className="convexBack"></div>
      </div>
      <div className="bg-keppel-300 p-4">{children}</div>
    </>
  );
}
