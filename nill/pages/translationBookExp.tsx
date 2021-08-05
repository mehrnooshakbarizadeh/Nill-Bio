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
      "تو عشق بودی، این را از مردنات فهمیدم (رمان تالیفی)، نشر نوای مکتوب، در دست انتشار",
    year: "-",
  },
  {
    subject:
      "«مخلوقات فانی» داستان کوتاه، اثر اروین دی. یالوم. انتشارات آوای مکتوب",
    year: "1394",
  },
  {
    subject: "«قمار خدایان» رمان، اثر آندره الکسیس، انتشارات نوای مکتوب",
    year: "1395",
  },
  {
    subject:
      "«قلعهی متحرک هاول» رمان، اثر دایانا واین جونز، انتشارات علمی فرهنگی",
    year: "1396",
  },
  {
    subject: "«محاکمه» رمان مصور، اثر فرانتس کافکا، انتشارات آوای روزان",
    year: "1396",
  },
  {
    subject: "«زنی که درخت شد» رمان، اثر هان کانگ، انتشارات نوای مکتوب",
    year: "1397",
  },
  {
    subject: "«حافظهی خاطرات ما» رمان، اثر نیکول کراوس، انتشارات سده",
    year: "1397",
  },
  {
    subject: "«تسخیر عمارت هیل» رمان، اثر شرلی جکسن، انتشارات خوب",
    year: "1398",
  },
  {
    subject:
      "«چرا مینویسم» مجموعه مقالات، اثر جورج اورول، انتشارات فرهنگ جاوید",
    year: "1398",
  },
  {
    subject: "«مرد وارد اتاق میشود» رمان، اثر نیکول کراوس، انتشارات سده",
    year: "1398",
  },
  {
    subject: "«عجیبتر از داستان» ناداستان، اثر چاک پالانیک، انتشارات سده",
    year: "1398",
  },
  {
    subject: "«هرولد و ماود» رمان، اثر کالین هیگینز، انتشارات وال",
    year: "1399",
  },
];

export default function TranslationBookExp() {
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
