import React from "react";
import FriendRequest from "./FriendRequest";
import Birthday from "./Birthday";
import Add from "./Add";

const RightMenu = ({ userId }: { userId: string }) => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <FriendRequest />
        <Birthday />
        <Add size="md" />
      </div>
    </>
  );
};

export default RightMenu;
