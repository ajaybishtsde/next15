import React from "react";
import ProfileCard from "./ProfileCard";
import Image from "next/image";
import Add from "./Add";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <>
      <div className="flex flex-col gap-6">
        {type === "home" && <ProfileCard />}
        <div className="flex flex-col gap-4 bg-white p-4 rounded-lg">
          <div className="flex items-center gap-6 hover:bg-slate-100 p-2 rounded-lg">
            <Image
              src={"/posts.png"}
              alt="posts"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="text-gray-600 cursor-pointer">My Posts</span>
          </div>
          <div className="flex items-center gap-6 hover:bg-slate-100 p-2 rounded-lg">
            <Image
              src={"/activity.png"}
              alt="activity"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="text-gray-600 cursor-pointer">Activity</span>
          </div>
          <div className="flex items-center gap-6 hover:bg-slate-100 p-2 rounded-lg">
            <Image
              src={"/market.png"}
              alt="marketplace"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="text-gray-600 cursor-pointer">Marketplace</span>
          </div>
          <div className="flex items-center gap-6 hover:bg-slate-100 p-2 rounded-lg">
            <Image
              src={"/events.png"}
              alt="events"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="text-gray-600 cursor-pointer">Events</span>
          </div>
          <div className="flex items-center gap-6 hover:bg-slate-100 p-2 rounded-lg">
            <Image
              src={"/albums.png"}
              alt="albums"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="text-gray-600 cursor-pointer">Albums</span>
          </div>
          <div className="flex items-center gap-6 hover:bg-slate-100 p-2 rounded-lg">
            <Image
              src={"/videos.png"}
              alt="videos"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="text-gray-600 cursor-pointer">Videos</span>
          </div>

          <div className="flex items-center gap-6 hover:bg-slate-100 p-2 rounded-lg">
            <Image
              src={"/news.png"}
              alt="news"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="text-gray-600 cursor-pointer">News</span>
          </div>
          <div className="flex items-center gap-6 hover:bg-slate-100 p-2 rounded-lg">
            <Image
              src={"/courses.png"}
              alt="courses"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="text-gray-600 cursor-pointer">Courses</span>
          </div>
          <div className="flex items-center gap-6 hover:bg-slate-100 p-2 rounded-lg">
            <Image
              src={"/lists.png"}
              alt="lists"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="text-gray-600 cursor-pointer">Lists</span>
          </div>
          <div className="flex items-center gap-6 hover:bg-slate-100 p-2 rounded-lg">
            <Image
              src={"/settings.png"}
              alt="settings"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="text-gray-600 cursor-pointer">Settings</span>
          </div>
        </div>
        <Add />
      </div>
    </>
  );
};

export default LeftMenu;
