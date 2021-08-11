import React from "react";
import Header from "../components/Header";
import Content from "../components/HomePage/Content";
import PersonalImage from "../components/HomePage/PersonalImage";
import SocialApp from "../components/HomePage/SocialApp";

function HomePage() {
  return (
    <>
    <header>
    <meta name='description' content="Home Page"></meta>
    <title>Home Page</title>
    </header>
      <Header />
      <div className="flex flex-col items-center pt-8 pb-8">
        <PersonalImage />
        <Content />
        <SocialApp />
      </div>
    </>
  );
}

export default HomePage;
