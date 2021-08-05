import React from "react";

function PersonalImage() {
  return (
    <>
      <div className=" bg-keppel-500 rounded-full w-44 h-44">
        <div className="relative w-40 h-40 rounded-full z-10 overflow-hidden top-2 left-2">
          <img
            src="./images/profilePic.jpeg"
            className="absolute top-0 left-0 bottom-0 right-0 object-cover h-40"
          ></img>
        </div>
      </div>
    </>
  );
}

export default PersonalImage;
