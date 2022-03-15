import React from "react";
import Header from "./Header";
import Opinion from "./Opinion";

import { leftelip } from "../assests";
import { rightelip } from "../assests";

const leftb = {
  width: "100%",
  height: "775px",
  background: "transparent",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${leftelip})`,
  float: "left",
};

const rightb = {
  width: "100%",
  height: "775px",
  background: "transparent",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${rightelip})`,
  float: "right",
};

const HeaderSection = () => {
  return (
    <section className="relative overflow-hidden pb-16">
      <Header />
      <Opinion />
      <div
        style={leftb}
        className="absolute md:block hidden bottom-0 2xl:left-0 -z-50"
      />
      <div
        style={rightb}
        className="absolute md:block hidden bottom-0 2xl:-right-2/3 -right-1/3 -z-50"
      />
    </section>
  );
};

export default HeaderSection;
