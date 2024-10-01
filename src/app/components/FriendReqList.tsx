"use client";
import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { acceptRequest } from "../lib/actions";
type Requests = FollowRequest & {
  sender: User;
};

const FriendReqList = ({
  friendRequests,
  currentUserId,
}: {
  friendRequests: Requests[];
  currentUserId: string;
}) => {
  const handleAccept = async (userId: string) => {
    try {
      console.log("acc");

      await acceptRequest(userId, currentUserId);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleReject = async (userId: string) => {
    try {
      console.log("rej");

      await acceptRequest(userId, currentUserId);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-2xl text-sm">
        <div className="flex items-center justify-between font-medium">
          <span className="text-gray-500">Friend Requests</span>
          <Link href={"/"} className="text-xs text-blue-500">
            See all
          </Link>
        </div>
        {friendRequests.map((requests) => {
          return (
            <div className="flex justify-between mt-4" key={requests.id}>
              {/* user img and name */}
              <div className="flex gap-4 items-center">
                <Image
                  src={requests.sender.avatar || "/noAvatar.png"}
                  width={40}
                  height={40}
                  alt="user"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-medium">{requests.sender.username}</span>
              </div>
              {/* accept or reject icon */}
              <div className="flex gap-4 items-center">
                <form action={() => handleAccept(requests.sender.id)}>
                  <button>
                    {" "}
                    <Image
                      src={"/accept.png"}
                      alt="reject"
                      width={20}
                      height={20}
                      className="cursor-pointer h-5 w-5"
                    />
                  </button>
                </form>
                <form action={() => handleReject(requests.sender.id)}>
                  <button>
                    <Image
                      src={"/reject.png"}
                      alt="reject"
                      width={20}
                      height={20}
                      className="cursor-pointer h-5 w-5"
                    />
                  </button>
                </form>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FriendReqList;
