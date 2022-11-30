import React from "react";
import { useState, useRef } from "react";
import Post from "./Post";
function Overlay(props) {
  const [alert, setAlert] = useState(false);
  const [newPost, setNewPost] = useState({
    id: 0,
    title: "",
    content: "",
    isLiked: false,
  });
  const [message, setMessage] = useState("");
  const handleAdd = () => {
    if (newPost.content !== "" && newPost.id !== "") {
      props.setPost(newPost);
      props.setTrigger(false);
      newPost.id++;
      setAlert(false);
      setNewPost({ ...newPost, title: "", content: "" });
      setMessage("");
    } else {
      setMessage("Title or content not found!");
    }
  };
  const handleEnter = (e) => {
    if (e.code === "Enter") {
      if (newPost.content !== "" && newPost.id !== "") {
        handleAdd();
        setAlert(false);
      } else {
        setMessage("Title or content not found!");
      }
    }
  };
  return props.trigger ? (
    <>
      <div className="">
        <div className="w-screen h-screen bg-black opacity-50 border-2 drop-shadow-lg fixed flex justify-center items-center  "></div>
        <div className="px-[16px] py-[10px] min-h-[430px] w-[500px] bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  rounded-lg ">
          <div className="text-center relative">
            <h1 className=" text-2xl font-semibold  p-2 border-b-2">
              Create post
            </h1>
            <button
              className="absolute top-0 right-0 text-3xl hover:opacity-70"
              onClick={() => props.setTrigger(false)}
            >
              <i className="fa-solid fa-xmark "></i>
            </button>
          </div>
          <div className="py-4 flex flex-row">
            <img
              className="w-[40px] h-[40px] inline-block rounded-full "
              src={require("../assets/img/avatar.jpg")}
            ></img>
            <div className="font-xl ml-2 font-semibold">Name</div>
          </div>
          <div className="py-2 border-b-2">
            <label>
              <input
                className={
                  alert === true
                    ? "w-full text-2xl outline-none font-semibold border-red-500 border-2 animate-pulse  p-2  rounded-lg"
                    : "w-full text-2xl outline-none font-semibold border-2 p-2  rounded-lg"
                }
                placeholder="Enter title...."
                onChange={(e) =>
                  setNewPost({
                    ...newPost,
                    title: e.target.value,
                  })
                }
                onKeyDown={(e) => handleEnter(e)}
              ></input>
              <textarea
                rows="4"
                wrap="soft"
                cols="100"
                placeholder="Share your today's story"
                className={
                  alert === true
                    ? "p-2 mt-2 rounded-lg text-xl border-red-500 border-2 w-full animate-pulse min-h-[100px]"
                    : "p-2 mt-2 rounded-lg text-xl border-2 w-full min-h-[100px]"
                }
                onChange={(e) =>
                  setNewPost({
                    ...newPost,
                    content: e.target.value,
                  })
                }
                onKeyDown={(e) => handleEnter(e)}
              ></textarea>
            </label>
            <div className="text-center italic text-red-600 text-lg animate-pulse">
              {message}
            </div>
          </div>
          <button
            className="w-full bg-blue-500 text-2xl font-semibold text-white mt-4 rounded-lg p-2 hover:opacity-80"
            onClick={() => handleAdd()}
          >
            Post
          </button>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default Overlay;
