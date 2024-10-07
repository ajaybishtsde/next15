"use client";
import { User } from "@prisma/client";
import React, { useActionState, useState } from "react";
import { updateProfile } from "../lib/actions";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";

const UpdateUser = ({ user, mongoId }: { user: User; mongoId: string }) => {
  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState<any>("");
  const router = useRouter();
  const [state, formAction] = useActionState(updateProfile, {
    success: false,
    error: false,
  });
  const UpdateButton = () => {
    const { pending } = useFormStatus();
    return (
      <>
        <button
          className="bg-blue-600 text-white rounded-md text-center py-3 outline-none"
          disabled={pending}
        >
          {pending ? "Updating..." : "Update"}
        </button>
      </>
    );
  };
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
            action={(formData) =>
              formAction({ formData: formData, cover: cover.secure_url || "" })
            }
            className="p-10 bg-white shadow-lg rounded-xl flex flex-col w-full md:w-1/2 xl:w-2/5 relative gap-6"
          >
            <h2>Update Profile</h2>
            <p className="text-gray-400 text-xs">
              Use the navbar profile to change the avatar or username
            </p>
            <CldUploadWidget
              uploadPreset="vibespace"
              onSuccess={(result) => setCover(result?.info as string)}
            >
              {({ open }) => {
                return (
                  <div className="flex flex-col gap-2" onClick={() => open()}>
                    <span className="text-sm">Cover picture</span>
                    <div className="flex gap-2">
                      <img
                        src={user.cover || "/noCover.png"}
                        alt="cover "
                        className="h-10 w-10 cursor-pointer"
                        width={40}
                        height={40}
                      />
                      <span className=" text-gray-500 self-end cursor-pointer underline">
                        Change
                      </span>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>

            <div className="flex flex-wrap gap-2 justify-between xl:gap-4">
              <div className="flex flex-col gap-3">
                <label className="text-gray-400 text-xs">First Name</label>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder={user.name || "First name"}
                  className="ring-1 ring-gray-500 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-gray-400 text-xs">Surname</label>
                <input
                  type="text"
                  name="lastname"
                  id=""
                  placeholder={user.lastname || "last name"}
                  className="ring-1 ring-gray-500 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-gray-400 text-xs">Description</label>
                <input
                  type="text"
                  name="description"
                  id=""
                  placeholder={user.description || "Life is beautifull...."}
                  className="ring-1 ring-gray-500 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-gray-400 text-xs">City</label>
                <input
                  type="text"
                  name="city"
                  id=""
                  placeholder={user.city || "City"}
                  className="ring-1 ring-gray-500 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-gray-400 text-xs">School</label>
                <input
                  type="text"
                  name="school"
                  id=""
                  placeholder={user.school || "School"}
                  className="ring-1 ring-gray-500 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-gray-400 text-xs">Work</label>
                <input
                  type="text"
                  name="work"
                  id=""
                  placeholder={user.work || "Work"}
                  className="ring-1 ring-gray-500 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-gray-400 text-xs">Website</label>
                <input
                  type="text"
                  name="website"
                  id=""
                  placeholder={user.website || "Website"}
                  className="ring-1 ring-gray-500 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>
            <UpdateButton />
            {state.success && (
              <span className="text-green-500">
                Profile Updated Succesfully!
              </span>
            )}
            {state.error && (
              <span className="text-red-500">Something went wrong!</span>
            )}
            <div
              className="font-bold absolute right-3 top-1 cursor-pointer"
              onClick={() => {
                setOpen(false);
                state.success && router.refresh();
              }}
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
