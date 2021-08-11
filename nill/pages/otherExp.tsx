import React from "react";
import BreadcrumbBar from "../components/BreadcrumbBar";
import Header from "../components/Header";
import PersonalImage from "../components/HomePage/PersonalImage";
import PersonalInfo from "../components/Resume/PersonalInfo";
import TimeLine from "../components/Resume/TimeLine";
import TimeLineItem, { TTimeline } from "../components/Resume/TimeLineItem";

const timelines = [
  {
    subject: "تدریس زبان انگلیسی در موسسه آموزش زبانهای خارجی حافظ",
    year: "1396-1397",
  },
  {
    subject: "تولید محتوای ترجمه منطبق با اصول سئو",
    year: "1398",
  },
];

export default function OtherExp() {
  return (
    <>
    <header>
    <meta name='description' content="Other Experience Page"></meta>
    <title>Other Experience</title>
    </header>
      <Header />
      <BreadcrumbBar />
      <div className="flex justify-end items-center p-8">
        <div className="flex-grow">
          <PersonalImage />
        </div>
        <PersonalInfo />
      </div>
      <TimeLine>
        <div>
          {timelines.map((time) => (
            <TimeLineItem
              key={time.subject}
              subject={time.subject}
              year={time.year}
            />
          ))}
        </div>
      </TimeLine>
    </>
  );
}
