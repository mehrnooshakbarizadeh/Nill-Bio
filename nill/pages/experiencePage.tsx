import React, { Children } from "react";
import BreadcrumbBar from "../components/BreadcrumbBar";
import Header from "../components/Header";
import PersonalImage from "../components/HomePage/PersonalImage";
import ExperienceLink from "../components/Resume/ExperienceLink";
import PersonalInfo from "../components/Resume/PersonalInfo";

type TJobLink = {
  nameExperientName: string;
  linkExperient: string;
};

const jobLinks: TJobLink[] = [
  {
    nameExperientName: "سوابق تحصیلی",
    linkExperient: "/educationalExp",
  },
  {
    nameExperientName: "زبان",
    linkExperient: "/englishExp",
  },
  {
    nameExperientName: "سابقه نگارش و ترجمه در نشریات",
    linkExperient: "/translationPublicationExp",
  },
  {
    nameExperientName: "برخی از عناوین کتابهای تالیفی و ترجمه شده",
    linkExperient: "/translationBookExp",
  },
  {
    nameExperientName: "مقالات علمی",
    linkExperient: "/scienceExp",
  },
  {
    nameExperientName: "سایر سوابق کاری",
    linkExperient: "/otherExp",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <BreadcrumbBar />
      <div className="flex flex-end items-center p-6">
        <div className="flex-grow ">
          <PersonalImage />
        </div>
        <PersonalInfo />
      </div>
      <div className="bg-keppel-100 h-20">
        <div className="bg-keppel-50 h-10"></div>
      </div>
      <div className=" bg-keppel-300 p-4">
        {jobLinks.map((joblink) => (
          <ExperienceLink
            key={joblink.linkExperient}
            href={joblink.linkExperient}
          >
            {joblink.nameExperientName}
          </ExperienceLink>
        ))}
      </div>
    </>
  );
}
