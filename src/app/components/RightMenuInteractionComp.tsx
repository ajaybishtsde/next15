"use client";
const RightMenuInteractionComp = ({
  userId,
  currentUserId,
  isBlocked,
  isFollowing,
  isFolloweRequestSent,
}: {
  userId: string;
  currentUserId: string;
  isBlocked: boolean;
  isFollowing: boolean;
  isFolloweRequestSent: boolean;
}) => {
  return (
    <>
      <button className="bg-blue-400 text-white w-full p-1 rounded-lg">
        Following
      </button>
      <div className="flex justify-end items-end text-xs text-red-400 cursor-pointer">
        <span>{isBlocked ? "Unblock User" : "Block User"}</span>
      </div>
    </>
  );
};

export default RightMenuInteractionComp;
