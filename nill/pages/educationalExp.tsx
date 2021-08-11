import React from "react";
import BreadcrumbBar from "../components/BreadcrumbBar";
import Header from "../components/Header";
import PersonalImage from "../components/HomePage/PersonalImage";
import PersonalInfo from "../components/Resume/PersonalInfo";
import TimeLine from "../components/Resume/TimeLine";
import TimeLineItem, { TTimeline } from "../components/Resume/TimeLineItem";

const timelines = [
  {
    subject: "دانشجوی دکتری زبان و ادبیات انگلیسی ",
    university: "دانشگاه: تهران",
    year: "1399 - 14--",
  },
  {
    subject: "کارشناسی ارشد زبان و ادبیات انگلیسی",
    university: "دانشگاه: آزاد اسلامی تهران مرکزی (معدل 18.5)",
    year: "1395-1398",
  },
  {
    subject: "کارشناسی زبان و ادبیات انگلیسی",
    university: "دانشگاه: آزاد اسلامی تهران مرکزی (معدل 17.26)",
    year: "1395-1391",
  },
];

export default function EducationalExp() {
  return (
    <>
      <Header />
      <BreadcrumbBar />
      <header>
        <meta name='description' content="Edocation Page"></meta>
        <title>Educational Experience</title>
      </header>
      <div className="flex justify-end items-center p-8 ">
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
              university={time.university}
              year={time.year}
            />
          ))}
        </div>
      </TimeLine>
    </>
  );
}
