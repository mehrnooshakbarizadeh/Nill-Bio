import React from "react";
import BreadcrumbBar from "../components/BreadcrumbBar";
import Header from "../components/Header";
import PersonalImage from "../components/HomePage/PersonalImage";
import PersonalInfo from "../components/Resume/PersonalInfo";
import TimeLine from "../components/Resume/TimeLine";
import TimeLineItem, { TTimeline } from "../components/Resume/TimeLineItem";

const timelines = [
  {
    subject:
      "«بررسی دو شعر از چارلز بوکفسکی با استفاده از نظریات رواندرمانی اگزیستانسیال» ارائه شده در پاییز 96 در دانشگاه تبریز، همایش: مفهوم بدی و اشکال آن در ادبیات",
    year: "-",
  },
  {
    subject:
      "«از دست رفتنِ اصالت و تاثیرات آن بر بحران هویت در رمان باشگاه مشتزنی از چاک پالانیک در پرتونظریات ژان بودریار و فردریک جیمسون» ارائه شده در بهار 97 در دانشگاه مازندران، همایش بین المللی ادبیات و زبانشناسی.",
    year: "-",
  },
  {
    subject:
      "«بررسی مفاهیم مانستگان و اصالتِ از دست رفته در رمان باشگاه مشتزنی اثر چاک پالانیک با استفاده از نظریات ژان بودریار»",
    year: "-",
  },
  {
    subject:
      "«بررسی مفاهیم فروپاشی سمبلیک و تاریخ از یاد رفته در رمان در قند هندوانه اثر ریچارد براتیگان با استفاده از نظریات ژان بودریار»",
    year: "-",
  },
];

export default function ScienceExp() {
  return (
    <>
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
