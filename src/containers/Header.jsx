import React from "react";
import { hero } from "../assests";

const Header = () => {
  return (
    <section className="pt-24">
      <div className="flex flex-col md:flex-row lg:pl-24 ">
        <div className="flex-1 flex-col space-y-6 md:mt-20 mt-0 lg:mr-8 px-6">
          <h1 className="text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
            Crypto driven by community.
          </h1>
          <p className="text-white text-sm sm:text-base">
            KoinPoll aggregates data in real-time on the opinion of traders
            across different digital assets. Air your opinion by voting on
            crypto projects you are confident on. The data you provide helps
            other traders make an investment decision.{" "}
          </p>
          <button className="hover:-translate-y-1 transition-all duration-500 ease-in-out py-2 px-4 rounded-lg font-bold text-center bg-primary text-white shadow-lg shadow-purple-500/50">
            Get Started
          </button>
        </div>
        <div className="flex-1 mt-4 md:mt-0 justify-center lg:pr-24 ">
          <img src={hero} alt="hero_banner" className="" />
        </div>
      </div>
    </section>
  );
};

export default Header;
