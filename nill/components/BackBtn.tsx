import { ArrowCircleLeftIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React from "react";

export default function BachBtn() {
  const router = useRouter();

  const handleBackBtn = () => {
    router.back();
  };

  return (
    <>
      <button onClick={handleBackBtn}>
        <ArrowCircleLeftIcon className="h-10 w-10 text-keppel-400 m-1 flex-grow" />
      </button>
    </>
  );
}
