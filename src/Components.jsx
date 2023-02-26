import React from "react";
import { SlEnergy } from "react-icons/sl";
import { BiBrain, BiMessageRoundedMinus } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

const Components = () => {
  return (
    <div className="relative flex min-h-screen flex-col md:justify-center overflow-hidden py-6 sm:py-12">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full sm:max-w-xl rounded-3xl bg-white">
          <div className="bg-gradient-to-b from-[#7857ff] to-[#2e2be9] p-8 rounded-3xl">
            <div className="text-[#c8c7ff] font-bold text-xl text-center ">
              Your Result
            </div>
            <div className="my-6 mx-auto bg-gradient-to-b from-[#4e21ca] to-[#2421ca] h-40 w-40 rounded-full p-4">
              <div className="flex justify-center items-center flex-col h-full">
                <h1 className="text-6xl font-extrabold text-white">76</h1>
                <h6 className="text-[#c8c7ff] text-sm">0f 100</h6>
              </div>
            </div>
            <div className="text-white text-2xl text-center font-bold pb-2">
              Great
            </div>

            <p className="text-[#c8c7ff] w-52 text-sm text-center mx-auto">
              Your scored is higher than 65% of the people who have taken these
              test
            </p>
          </div>
          <div className="p-8">
            <h1 className="text-[#303b5a] text-xl font-bold pb-4">Summary</h1>
            <div className="flex justify-between p-2 my-3 bg-[#ff5757] bg-opacity-10 rounded-lg">
              <div className="flex gap-2 justify-center items-center text-[#ff5757]">
                <SlEnergy />
                <span>Reaction</span>
              </div>
              <div>
                <span className=" font-bold text-[#303b5a]">80</span>
                <span className="text-gray-400"> / 100</span>
              </div>
            </div>
            <div className="flex justify-between p-2 my-3 bg-[#ffb01f] bg-opacity-10 rounded-lg">
              <div className="flex gap-2 justify-center items-center text-[#ffb01f]">
                <BiBrain />
                <span>Memory</span>
              </div>
              <div>
                <span className=" font-bold text-[#303b5a]">92</span>
                <span className="text-gray-400"> / 100</span>
              </div>
            </div>
            <div className="flex justify-between p-2 my-3 bg-[#00bd91] bg-opacity-10 rounded-lg">
              <div className="flex gap-2 justify-center items-center text-[#00bd91]">
                <BiMessageRoundedMinus />
                <span>Verbal</span>
              </div>
              <div>
                <span className=" font-bold text-[#303b5a]">61</span>
                <span className="text-gray-400"> / 100</span>
              </div>
            </div>
            <div className="flex justify-between p-2 my-3 bg-[#1125d4] bg-opacity-10 rounded-lg">
              <div className="flex gap-2 justify-center items-center text-[#1125d4]">
                <AiOutlineEye />
                <span>Visual</span>
              </div>
              <div>
                <span className=" font-bold text-[#303b5a]">72</span>
                <span className="text-gray-400"> / 100</span>
              </div>
            </div>
            <button className=" text-white bg-[#303b5a] w-full px-20 py-2 rounded-full mt-5 hover:bg-[#1125d4]">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
