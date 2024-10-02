"use client";
import { User } from "@prisma/client";
import React, { useState } from "react";
import { UpdateProfile } from "../lib/actions";

const UpdateUser = ({ user, mongoId }: { user: User; mongoId: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <span
        className="text-blue-600 text-xs cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Update
      </span>
      {open && (
        <div className="absolute w-screen h-screen top-0 left-0 flex justify-center items-center bg-black bg-opacity-65 z-50">
          <form
            action={UpdateProfile}
            className="p-10 bg-white shadow-lg rounded-xl flex flex-col w-full md:w-1/2 xl:w-2/5 relative gap-6"
          >
            <h2>Update Profile</h2>
            <p className="text-gray-400 text-xs">
              Use the navbar profile to change the avatar or username
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-sm">Cover picture</span>
              <div className="flex gap-2">
                <img
                  src={user.cover || "/noCover.png"}
                  alt="cover "
                  className="h-10 w-10 cursor-pointer"
                  width={40}
                  height={40}
                />
                <span className=" text-gray-500 self-end cursor-pointer">
                  Change
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between px-4">
              <div className="w-2/5 flex flex-col mb-8">
                <label className="mb-2 text-gray-400 text-xs">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id=""
                  placeholder={user.name || "First name"}
                  className="h-12 border-2 border-gray-500 p-2 rounded-md"
                />
              </div>
              <div className="w-2/5 flex flex-col mb-8">
                <label className="mb-2 text-gray-400 text-xs">Surname</label>
                <input
                  type="text"
                  name="surname"
                  id=""
                  placeholder={user.lastname || "Surname"}
                  className="h-12 border-2 border-gray-500 p-2 rounded-md"
                />
              </div>
              <div className="w-2/5 flex flex-col mb-8">
                <label className="mb-2 text-gray-400 text-xs">
                  Description
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder={user.description || "Life is beautifull...."}
                  className="h-12 border-2 border-gray-500 p-2 rounded-md"
                />
              </div>
              <div className="w-2/5 flex flex-col mb-8">
                <label className="mb-2 text-gray-400 text-xs">City</label>
                <input
                  type="text"
                  name="city"
                  id=""
                  placeholder={user.city || "City"}
                  className="h-12 border-2 border-gray-500 p-2 rounded-md"
                />
              </div>
              <div className="w-2/5 flex flex-col mb-8">
                <label className="mb-2 text-gray-400 text-xs">School</label>
                <input
                  type="text"
                  name="school"
                  id=""
                  placeholder={user.school || "School"}
                  className="h-12 border-2 border-gray-500 p-2 rounded-md"
                />
              </div>
              <div className="w-2/5 flex flex-col mb-8">
                <label className="mb-2 text-gray-400 text-xs">Work</label>
                <input
                  type="text"
                  name="work"
                  id=""
                  placeholder={user.work || "Work"}
                  className="h-12 border-2 border-gray-500 p-2 rounded-md"
                />
              </div>
              <div className="w-2/5 flex flex-col mb-8">
                <label className="mb-2 text-gray-400 text-xs">Website</label>
                <input
                  type="text"
                  name="website"
                  id=""
                  placeholder={user.website || "Website"}
                  className="h-12 border-2 border-gray-500 p-2 rounded-md"
                />
              </div>
            </div>
            <button className="bg-blue-600 text-white rounded-md text-center py-3">
              Update
            </button>
            <div
              className="font-bold absolute right-3 top-1 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              X
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateUser;
