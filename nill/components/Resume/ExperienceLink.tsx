import Link from "next/link";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function ExperienceLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Link href={href}>
        <a className="no-underline text-gray-700">
          <div className=" bg-keppel-WHITE flex justify-end border border-keppel-400 rounded items-center pl-8 pr-2 ml-4 mr-20 mt-4 mb-4 h-11">
            <h4 className="flex-grow" lang="en">{children}</h4>
            <ChevronRightIcon className="h-5 w-5 text-gray-600 m-2" />
          </div>
        </a>
      </Link>
    </>
  );
}
