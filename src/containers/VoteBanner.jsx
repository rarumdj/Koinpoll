import React from "react";
import { votebanner } from "../assests";

const VoteBanner = () => {
  return (
    <section className="relative">
      <img src={votebanner} alt="" className="w-full h-[378px]" />

      <div className="flex absolute top-0 bottom-0 left-0 right-0">
        <div className="m-auto px-6 lg:w-3/5  space-y-6 text-center">
          <h1 className="text-white md:text-4xl text-3xl font-extrabold">
            Realtime opinion and insights on cryptocurrencies
          </h1>
          <button className="hover:-translate-y-1 transition-all duration-500 ease-in-out py-2 px-4 w-32 rounded-lg font-bold text-center bg-primary text-white shadow-lg shadow-purple-500/50">
            Vote
          </button>
        </div>
      </div>
    </section>
  );
};

export default VoteBanner;
