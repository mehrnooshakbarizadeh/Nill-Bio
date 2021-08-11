import React from "react";
import BreadcrumbBar from "../components/BreadcrumbBar";
import Header from "../components/Header";
import PersonalImage from "../components/HomePage/PersonalImage";
import PersonalInfo from "../components/Resume/PersonalInfo";
import TimeLine from "../components/Resume/TimeLine";
import TimeLineItem, { TTimeline } from "../components/Resume/TimeLineItem";

const timelines = [
  {
    subject: "خبرنامه انتشارات علمی و فرهنگی",
    year: "1396",
  },
  {
    subject: "نقد رمان در روزنامه «هفت صبح»",
    year: "1396",
  },
  {
    subject: "فصلنامهی «صنعت ترجمه»",
    year: "1396-1398",
  },
  {
    subject: "نقد ادبی در روزنامه «آرمان»",
    year: "1397-",
  },
  {
    subject: "ترجمه داستان کوتاه روزنامه «سازندگی»",
    year: "1397-",
  },
  {
    subject: "ترجمه و نقد ادبی فصلنامه «آگاهی نو»",
    year: "1399-",
  },
];

export default function TranslationPublicationExp() {
  return (
    <>
    <header>
    <meta name='description' content="ranslation Article Page"></meta>
    <title>Translation Article Page</title>
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
