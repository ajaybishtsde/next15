"use client";
import Image from "next/image";
import React, { useState } from "react";
import prisma from "../lib/client";
import { useClerk, useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import { useFormStatus } from "react-dom";
import { addPost } from "../lib/actions";
// const handlePost = async (
//   formData: FormData,
//   image: string,
//   userId: string
// ) => {
//   ("use server");
//   const desc = formData.get("desc") as string;
//   try {
//     const res = await prisma.post.create({
//       data: {
//         userId: "66c94be3783a93867a6529ad",
//         desc: desc,
//       },
//     });
//     console.log("res>>>>>>>>>>>..", res);
//   } catch (error) {
//     console.log("error", error);
//   }
// };
const AddPost = ({ userId }: { userId: string }) => {
  const { user, isLoaded } = useUser();
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState<any>("");
  if (!user) return;
  // if (isLoaded) {
  //   return "Loading...";
  // }
  const AddPostButton = () => {
    const { pending } = useFormStatus();
    return (
      <>
        <button
          disabled={pending}
          className="bg-slate-200 p-2 rounded-lg text-gray-600"
        >
          {pending ? "Sending" : "Send"}
        </button>
      </>
    );
  };
  return (
    <>
      <div className="w-full rounded-xl p-4 bg-white shadow-2xl">
        <div className="flex gap-6 w-full">
          <Image
            className="rounded-full h-12 w-12 ring-2"
            src={user.imageUrl || "noAvatar.png"}
            alt="profile"
            width={48}
            height={48}
          />
          <div className="flex-1 rounded-lg flex flex-col gap-4 ">
            <form
              action={(formData: FormData) =>
                addPost(formData, image.secure_url, userId)
              }
              className="flex gap-4 justify-evenly items-end flex-1 rounded-lg"
            >
              <textarea
                className="bg-slate-200 outline-none rounded-lg flex-1 p-2"
                placeholder="What's on your mind?"
                name="desc"
                onChange={(e) => setDesc(e.target.value)}
              />
              <Image
                src="/emoji.png"
                alt="emoji"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <AddPostButton />
            </form>
            <div className="flex gap-4 flex-wrap items-center mt-4">
              <CldUploadWidget
                uploadPreset="vibespace"
                onSuccess={(result, { widget }) => {
                  setImage(result?.info as string);
                  widget.close();
                }}
              >
                {({ open }) => {
                  return (
                    <div className="flex gap-2" onClick={() => open()}>
                      <Image
                        src="/addimage.png"
                        alt="image"
                        width={16}
                        height={16}
                        className="cursor-pointer h-6 w-6"
                      />
                      Photo
                    </div>
                  );
                }}
              </CldUploadWidget>

              <div className="flex gap-2">
                <Image
                  src="/addVideo.png"
                  alt="video"
                  width={16}
                  height={16}
                  className="cursor-pointer h-6 w-6"
                />
                Video
              </div>
              <div className="hidden  md:flex gap-2">
                <Image
                  src="/poll.png"
                  alt="poll"
                  width={16}
                  height={16}
                  className="cursor-pointer h-6 w-6"
                />
                Poll
              </div>
              <div className="flex gap-2">
                <Image
                  src="/addevent.png"
                  alt="event"
                  width={16}
                  height={16}
                  className="cursor-pointer h-6 w-6"
                />
                Event
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
