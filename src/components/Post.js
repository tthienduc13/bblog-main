import React from "react";
import Tasks from "./Tasks";
import { useState } from "react";
function Post({ postList, functionSetPostList }) {
  const handleClick = (index) => {
    functionSetPostList(
      postList.map((post, id) => {
        if (id === index) {
          return post.isLiked === false
            ? { ...post, isLiked: true }
            : { ...post, isLiked: false };
        } else {
          return post;
        }
      })
    );
  };
  const handleDelete = (index) => {
    const newPostList = postList.filter((task, id) => id !== index);
    functionSetPostList(newPostList);
  };
  return (
    <>
      {postList.map((post, index) => (
        <Tasks
          functionClick={() => handleClick(index)}
          functionDelete={() => handleDelete(index)}
          info={post}
          index={index}
        ></Tasks>
      ))}
    </>
  );
}

export default Post;
