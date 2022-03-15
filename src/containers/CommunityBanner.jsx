import React from "react";
import { Icon } from "@iconify/react";
import { rightelip, space } from "../assests";

const rightb = {
  width: "100%",
  height: "667px",
  background: "transparent",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${rightelip})`,
};
const CommunityBanner = () => {
  return (
    <section className="py-16 flex relative overflow-hidden">
      <div className="m-auto lg:w-3/5 sm:w-3/4 w-full px-8">
        <div className="flex justify-between flex-row md:pl-8 pl-8 pr-8 md:pr-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-[3rem] ">
          <div className="flex flex-col space-y-6 py-10">
            <h1 className="text-white lg:text-4xl md:text-3xl text-2xl font-extrabold">
              Join our community{" "}
            </h1>
            <div className="w-36">
              <ul className="grid grid-cols-3 gap-2 space-x-0">
                <li className="flex w-10 h-10 rounded-full bg-black bg-opacity-30">
                  <a href="/" className="m-auto">
                    <Icon
                      icon="akar-icons:twitter-fill"
                      fontSize={20}
                      color="fff"
                    />
                  </a>
                </li>
                <li className="flex w-10 h-10 rounded-full bg-black bg-opacity-30">
                  <a href="/" className="m-auto">
                    <Icon icon="bxl:telegram" fontSize={20} color="fff" />
                  </a>
                </li>
                <li className="flex w-10 h-10 rounded-full bg-black bg-opacity-30">
                  <a href="/" className="m-auto">
                    <Icon icon="bi:medium" fontSize={20} color="fff" />
                  </a>
                </li>
                <li className="flex w-10 h-10 rounded-full bg-black bg-opacity-30">
                  <a href="/" className="m-auto">
                    <Icon
                      icon="akar-icons:discord-fill"
                      fontSize={20}
                      color="fff"
                    />
                  </a>
                </li>
                <li className="flex w-10 h-10 rounded-full bg-black bg-opacity-30">
                  <a href="/" className="m-auto">
                    <Icon
                      icon="bi:github"
                      fontSize={20}
                      color="fff"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" md:block hidden justify-end items-center">
            <img
              src={space}
              alt=""
              className="w-full h-full object-scale-down"
            />
          </div>
        </div>
      </div>
      <div
        style={rightb}
        className="absolute md:block hidden bottom-0 2xl:-right-2/3 -right-1/3 -z-50"
      />
    </section>
  );
};

export default CommunityBanner;
