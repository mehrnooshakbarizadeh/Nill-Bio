import React from "react";
import Header from "../components/Header";
import PersonalImage from "../components/HomePage/PersonalImage";
import PersonalInfo from "../components/Resume/PersonalInfo";
import ExperiencePage from "./experiencePage";

function ResumePage() {
  return (
    <>
    <header>
    <meta name='description' content="Resume Page"></meta>
    <title>Resume Page</title>
    </header>
      <Header />
      <div className="flex flex-end items-center p-6">
        <div className="flex-grow ">
          <PersonalImage />
        </div>
        <PersonalInfo />
      </div>
      <ExperiencePage />
    </>
  );
}

export default ResumePage;
