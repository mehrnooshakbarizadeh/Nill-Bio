import { useRouter } from "next/router";
import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import HomePage from "./homePage";

export default function Home() {
  return (
    <>
      <main className="bg-gray-100">
        <HomePage />
      </main>
    </>
  );
}
