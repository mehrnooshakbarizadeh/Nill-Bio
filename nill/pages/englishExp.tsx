import React from "react";
import BreadcrumbBar from "../components/BreadcrumbBar";
import Header from "../components/Header";
import PersonalImage from "../components/HomePage/PersonalImage";
import PersonalInfo from "../components/Resume/PersonalInfo";
import TimeLine from "../components/Resume/TimeLine";
import TimeLineItem, { TTimeline } from "../components/Resume/TimeLineItem";

const timelines = [
  {
    subject: "مدرک TTC (تدریس زبان انگلیسی به عنوان زبان دوم) ",
    university: "جهاد دانشگاهی دانشگاه تهران",
    year: "*",
  },
  {
    subject: "تسلط کامل به زبان انگلیسی",
    university: "-",
    year: "*",
  },
  {
    subject: "آشنایی با زبان آلمانی و آشنایی نسبی با زبانهای فرانسوی و عربی",
    university: "-",
    year: "*",
  },
];

export default function EnglishExp() {
  return (
    <>
      <Header />
      <BreadcrumbBar />
      <header>
      <meta name='description' content="English Experience Page"></meta>
      <title>English Experience</title>
      </header>
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
              university={time.university}
              year={time.year}
            />
          ))}
        </div>
      </TimeLine>
    </>
  );
}
