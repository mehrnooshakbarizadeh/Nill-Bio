import { useRouter } from "next/router";
import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import HomePage from "./homePage";

export default function Home() {
  return (
    <>
    <header>
    <meta name='description' content="index home Page"></meta>
    <title>Niloofar Rahmanian Website</title>
    </header>
      <main className="bg-gray-100">
        <HomePage />
      </main>
    </>
  );
}
