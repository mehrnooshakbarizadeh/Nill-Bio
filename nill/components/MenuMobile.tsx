import React from "react";
import { HomeIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/solid";
import { BookOpenIcon } from "@heroicons/react/Outline";
import { NewspaperIcon } from "@heroicons/react/Outline";
import { AtSymbolIcon } from "@heroicons/react/Outline";
import MenuAncher from "./MenuAncher";

function MenuMobile() {
  return (
    <>
      <nav className="flex">
        <MenuAncher href="/homePage">
          <HomeIcon className="h-5 w-5 text-gray-600 m-2" />
        </MenuAncher>
        <MenuAncher href="/experiencePage">
          <UserIcon className="h-5 w-5 text-gray-600 m-2" />
        </MenuAncher>
        <MenuAncher href="/">
          <BookOpenIcon className="h-5 w-5 text-gray-600 m-2" />
        </MenuAncher>
        <MenuAncher href="/">
          <NewspaperIcon className="h-5 w-5 text-gray-600 m-2" />
        </MenuAncher>
        <MenuAncher href="/">
          <AtSymbolIcon className="h-5 w-5 text-gray-600 m-2" />
        </MenuAncher>
      </nav>
    </>
  );
}

export default MenuMobile;
