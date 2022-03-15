import React from "react";

const Opinion = () => {
  return (
    <section className="py-16 px-6 lg:px-28">
      <div className="flex md:flex-row flex-col lg:gap-64 gap-8">
        <div className="flex flex-col space-y-6 ">
          <h1 className="text-white md:text-4xl text-3xl font-extrabold">
            Opinions matter, especially Yours!
          </h1>
          <p className="text-white text-sm sm:text-base">
            KP shows you clearly what people think about different
            cryptocurrencies. You might agree or disagree with them. Drop your
            vote, let others know what you think.
          </p>
        </div>
        <div className="flex flex-col space-y-6">
          <h1 className="text-white md:text-4xl text-3xl font-extrabold">
            Don’t invest blindly, invest in what people are confident in.
          </h1>
          <p className="text-white text-sm sm:text-base">
            Scan votes on cryptocurrencies and use the data to fine-tune your
            investment decision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Opinion;
