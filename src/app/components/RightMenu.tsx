import React from "react";
import FriendRequest from "./FriendRequest";
import Birthday from "./Birthday";
import Add from "./Add";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <>
      <div className="flex flex-col gap-6">
        {userId ? (
          <>
            <UserInfoCard />
            <UserMediaCard />
          </>
        ) : null}
        <>
          <FriendRequest />
          <Birthday />
          <Add />
        </>
      </div>
    </>
  );
};

export default RightMenu;
