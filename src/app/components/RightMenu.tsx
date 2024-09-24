import React from "react";
import FriendRequest from "./FriendRequest";
import Birthday from "./Birthday";
import Add from "./Add";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";

const RightMenu = ({ user }: { user: User }) => {
  return (
    <>
      <div className="flex flex-col gap-6">
        {user ? (
          <>
            <UserInfoCard user={user} />
            <UserMediaCard user={user} />
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
