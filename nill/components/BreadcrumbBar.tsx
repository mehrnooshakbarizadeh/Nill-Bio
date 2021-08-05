import React from "react";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";
import BreadCrumb from "./BreadCrumb";
import BackBtn from "./BackBtn";

export default function BreadcrumbBar() {
  return (
    <>
      <div className="flex justify-start flex-row-reverse items-center rounded-b-3xl border-keppel-100 border-b m-2 pl-4 pr-4">
        <BackBtn />
        <div className="flex-grow">
          <BreadCrumb />
        </div>
      </div>
    </>
  );
}
