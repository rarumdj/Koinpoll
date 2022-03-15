import React from "react";
import { logoicon } from "../assests";

const Footer = () => {
  return (
    <footer className="bg-navColor pb-8 pt-16 lg:px-28 px-8 border-b-8 border-purple-600">
      <div className="flex md:flex-row flex-col gap-12">
        <div className="basis-2/5">
          <div className="flex items-center space-x-3">
            <img src={logoicon} alt="" />
            <p className="text-white text-xs sm:text-sm">
              DISCLAIMER: All data provided is for informational purposes.
            </p>
          </div>
        </div>
        <div className="basis-3/5">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 justify-center">
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm sm:text-base">
                Products
              </h4>
              <ul className="space-y-3 text-gray-500 text-sm sm:text-base">
                <li>Advertising</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm sm:text-base">
                Coin Picks
              </h4>
              <ul className="space-y-3 text-gray-500 text-sm sm:text-base">
                <li>About us</li>
                <li>Terms of use</li>
                <li>Privacy policy</li>
                <li>Disclaimer</li>
                <li>Methodology</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm sm:text-base">
                Help
              </h4>
              <ul className="space-y-3 text-gray-500 text-sm sm:text-base">
                <li>FAQs</li>
                <li>Support</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm sm:text-base">
                Community
              </h4>
              <ul className="space-y-3 text-gray-500 text-sm sm:text-base">
                <li>Twitter</li>
                <li>Telegram</li>
                <li>Discord</li>
                <li>Instagram</li>
                <li>Medium</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="md:text-left text-center text-gray-500 text-xs sm:text-sm">
          COPYRIGHT © 2022 KOINPOLL. ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
