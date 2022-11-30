import React from "react";
import { useState } from "react";
import { useRef } from "react";
function Heading() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="h-14 fixed z-10 w-full bg-white drop-shadow-lg flex flex-row justify-center items-center px-40 md:px-9">
        <div className="  min-w-[240px]">
          <img className="h-14" src={require("../assets/img/logo.png")}></img>
        </div>
        <div className="flex-1 text-center max-w-2xl">
          <input
            className="outline-none bg-[#f0f2f5] w-full rounded-2xl border-none py-2 px-4  "
            placeholder="Search for the blog...."
            onClick={handleClick}
          ></input>
        </div>
        <div className="min-w-[240px] text-center h-full flex flex-row justify-center items-center 3xl:hidden">
          <div className="px-2 mr-4 ">
            <img
              className="h-[40px] w-[40px] rounded-full inline-block"
              src={require("../assets/img/avatar.jpg")}
            ></img>
          </div>
          <div className="px-8 border-r-2 border-l-2 border-l-[#cccc] border-r-[#cccc]  relative">
            <p className="font-semibold opacity-80">Thiện Đức</p>
            <button
              className="ml-4 absolute top-[-3px] right-[-20px]"
              onClick={() => setShowMore(!showMore)}
            >
              <i class="fa-solid fa-sort-down"></i>
            </button>
            {showMore && (
              <div className="p-2 absolute w-[200px] border-2  shadow-lg rounded-xl top-[30px] md:left-[-20px]  bg-[white] flex flex-col items-start text-left">
                <a
                  href="#"
                  className="opacity-80 px-[10px] py-[10px] rounded-lg w-full hover:bg-slate-200 hover:opacity-100 hover:scale-105  font-semibold "
                >
                  <i className="fa-solid  fa-house-user mr-2"></i>Home
                </a>
                <a
                  href="#"
                  className="opacity-80 px-[10px] py-[10px] rounded-lg w-full hover:bg-slate-200 hover:opacity-100 hover:scale-105  font-semibold "
                >
                  <i className="fa-solid  fa-gear mr-2"></i>
                  Settings
                </a>
                <a
                  href="#"
                  className="opacity-80 px-[10px] py-[10px] rounded-lg w-full hover:bg-slate-200 hover:opacity-100 hover:scale-105  font-semibold "
                >
                  <i className="fa-solid  fa-circle-info mr-2"></i>
                  Help
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Heading;
