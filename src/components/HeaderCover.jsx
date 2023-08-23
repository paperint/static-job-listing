import React from "react";
import DesktopImage from "../assets/images/bg-header-desktop.svg";
import MobileImage from "../assets/images/bg-header-mobile.svg";

function HeaderCover() {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={DesktopImage} />
      <img
        src={MobileImage}
        alt="background cover"
        className="w-full bg-root-Desaturated-Dark-Cyan h-36"
      />
    </picture>
  );
}

export default HeaderCover;
