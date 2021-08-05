import React from "react";

export type TTimeline = {
  subject: string;
  university?: string;
  year: string;
};

export default function TimeLineItem({ subject, university, year }: TTimeline) {
  return (
    <>
      <div className="flex justify-end ">
        <div className="mt-4 mb-4 text-xs font-semibold leading-6 flex-col-reverse flex flex-grow mr-12 justify-center text-right p-2 bg-keppel-WHITE border-keppel-600 border rounded-md h-auto w-80 items-center">
          <div>{university}</div>
          <div>{subject}</div>
        </div>
        <div className=" bg-keppel-WHITE w-1.5 ">
          <div className=" bg-keppel-500 rounded-full w-1.5 h-1.5 flex items-center mt-12"></div>
        </div>
        <div className=" text-keppel-WHITE w-24 text-xs font-semibold flex items-center pl-3">
          {year}
        </div>
      </div>
    </>
  );
}
