import React from "react";
import { useState } from "react";

function Tasks({ functionClick, functionDelete, functionShow, info, index }) {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="bg-white w-[720px] relative rounded-2xl px-4 mb-4 flex flex-col overflow-hidden ">
      <div className="flex flex-row py-4 border-b-2 border-b-[#f0f2f5] ">
        <img
          className="h-[40px] w-[40px] rounded-full"
          src={require("../assets/img/avatar.jpg")}
        ></img>
        <div className="flex flex-col flex-grow ml-2 ">
          <a href="#" className="font-semibold text-lg inline-block">
            Thien Duc
          </a>
          <a
            href="#"
            className="text-[#7d8188] mt-[-4px] ml-[2px] text-xs inline-block"
          >
            30m
          </a>
        </div>
      </div>
      <button
        className="absolute top-4 right-8 text-xl"
        onClick={() => handleShow()}
      >
        <i className="fa-solid fa-ellipsis"></i>
      </button>
      {show === true ? (
        <div>
          <div className="bg-red-200 rounded-lg shadow-2xl absolute top-10 right-[32px] hover:opacity-80">
            <button
              className="font-semibold px-4 py-[2px] text-red-600 text-lg"
              onClick={() => functionDelete(index)}
            >
              <i className="fa-solid fa-xmark mr-2 "></i>
              Delete post
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="py-4 border-b-2 border-b-[#f0f2f5]">
        <h1 className="font-semibold text-center text-red-600 text-2xl uppercase ">
          #{info.title}
        </h1>
        <p className="mt-4 text-justify">{info.content}</p>
      </div>
      <div className="flex flex-row  mx-[-16px]">
        <button
          className="h-[56px] w-1/3 flex justify-center items-center text-2xl hover:scale-125 hover:duration-300 "
          onClick={() => functionClick(index)}
        >
          {info.isLiked === true ? (
            <i className="fa-solid fa-heart text-red-500"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </button>
        <button className="h-[56px] w-1/3 flex justify-center items-center text-2xl hover:opacity-80  hover:scale-125 hover:duration-300">
          <i className="fa-regular fa-comment"></i>
        </button>
        <button className="h-[56px] w-1/3 flex justify-center items-center text-2xl hover:opacity-80 hover:scale-125 hover:duration-300 ">
          <i class="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}

export default Tasks;
