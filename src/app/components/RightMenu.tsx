import React, { Suspense } from "react";
import FriendRequest from "./FriendRequest";
import Birthday from "./Birthday";
import Add from "./Add";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";

const RightMenu = ({ user, mongoId }: { user: User; mongoId: string }) => {
  return (
    <>
      <div className="flex flex-col gap-6">
        {user ? (
          <>
            <Suspense fallback="loading...">
              <UserInfoCard user={user} mongoId={mongoId} />
            </Suspense>
            <Suspense fallback="loading...">
              <UserMediaCard user={user} />
            </Suspense>
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
