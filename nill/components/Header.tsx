import React from "react";
import Logo from "./Logo";
import MenuMobile from "./MenuMobile";

function Header() {
  return (
    <>
      <div className="flex justify-end p-6 items-center border-keppel-300 border-b-2">
        <div className="flex-grow">
          <Logo />
        </div>
        <MenuMobile />
      </div>
    </>
  );
}

export default Header;
