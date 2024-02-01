import React from "react";
import photo from "../components/Photo .png";
import Group from "../components/Group.png";
import Vector from "../components/Vector.png";
import icon from "../components/Icon.png";
import MENA from "../components/MENA.png";
function Component() {
  return (
    <div className="w-[1287px] h-[1286px] relative bg-white content-center m-[113px] ">
      <div className=" flex w-[1061px] h-[1061px] ml-[113px] top-[112px] relative bg-gray-950 items-center content-center" />
      <div className="w-[635px] h-[789px] pl-3.5 pr-[13px] pt-[38px] pb-[17px] left-[326px] top-[248px] absolute  bg-gradient-to-r from-secondary-100 to-primary rounded-[15px] flex-col justify-end items-center inline-flex">
        <div className="w-[608px] h-[734px] relative">
          <img
            className=" flex w-[105px] h-[105px] ml-[251px] mr[252px] mb-[629px] top-0 absolute rounded-full"
            src={photo}
            alt=""
          />
          <div className="left-[156px] top-[126px] absolute text-white text-[42px] font-bold font-bodyFont">
            Ranya Ahmed
          </div>
          <div className="left-[130px] top-[197px] absolute text-white text-lg font-normal font-bodyFont">
            Marketing Director at MENA Hackathons
          </div>
          <div>
            <img
              src={Vector}
              alt=""
              className="relative w-5 h-5 left-[170px] top-[225px] flex-col justify-start items-start inline-flex"
            />
            <span className=" relative w-[248px] h-[18px] left-[175px] top-[225px] text-white text-sm font-normal font-bodyFont">
              contact@menahackathons.com
            </span>
            <div>
              <img
                src={icon}
                alt=""
                className=" left-[233px] top-[230px] relative w-[20px] h-[17px] flex-col justify-start items-start inline-flex"
              />
              <span className=" relative ml-[239px] top-[230px] w-[117px] h-5 text-white text-sm font-normal font-bodyFont">
                +20 101111111111
              </span>
            </div>
            <div>
              <img
                src={Group}
                className="left-[135px] top-[250px] relative w-[347px] h-[347px] mix-blend-lighten rounded-md border border-white"
                alt=""
              />
              <div className=" flex w-[94px] h-[91px] mt-[31px] ml-[262px] bg-secondary-200 rounded-3xl justify-center relative">
                <img
                  className=" w-[57px] h-[46px] mt-[13px]"
                  src={MENA}
                  alt=""
                />
                <div className="  flex absolute text-white text-[8px] font-normal font-bodyFont  h-[11px] mt-[65px]">
                  MENA Hackathons
                </div>
              </div>
            </div>
          </div>
          <div className="  flex  top-[195px]  relative w-[100px] h-5 text-neutral-200 text-opacity-50 text-sm font-extralight  justify-start items-start font-bodyFont">
            <span className="px-1">SHAPE</span>
            <span className="pr-4">HACATHONS</span>
            <span className="px-1">SHAPE</span>{" "}
            <span className="pr-4">HACATHONS</span>
            <span className="px-1">SHAPE</span>{" "}
            <span className="pr-4">HACATHONS</span>
            <span className="px-1">SHAPE</span> <span>HACATHONS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
