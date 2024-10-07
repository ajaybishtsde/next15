import React from "react";
import Post from "./Post";

const Feed = ({ username }: { username?: string }) => {
  return (
    <>
      <div className="bg-white shadow-2xl flex flex-col p-4">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};

export default Feed;
