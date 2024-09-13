import Image from "next/image";
import React from "react";
import prisma from "../lib/client";
import { auth } from "@clerk/nextjs/server";
const { userId } = auth();
console.log("userId", userId);
const handlePost = async (formData: FormData) => {
  "use server";
  if (!userId) return;
  const desc = formData.get("desc") as string;
  try {
    const res = await prisma.post.create({
      data: {
        userId: "66c94be3783a93867a6529ad",
        desc: desc,
      },
    });
    console.log("res>>>>>>>>>>>..", res);
  } catch (error) {
    console.log("error", error);
  }
};
const AddPost = () => {
  return (
    <>
      <div className="w-full rounded-xl p-4 bg-white shadow-2xl">
        <div className="flex gap-6 w-full">
          <Image
            className="rounded-full h-12 w-12 ring-2"
            src="https://images.unsplash.com/photo-1725776339684-30dda601552e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
            width={48}
            height={48}
          />
          <div className="flex-1 rounded-lg flex flex-col gap-4 ">
            <form
              action={handlePost}
              className="flex gap-4 justify-evenly items-end flex-1 rounded-lg"
            >
              <textarea
                className="bg-slate-200 outline-none rounded-lg flex-1 p-2"
                placeholder="What's on your mind?"
                name="desc"
              />
              <Image
                src="/emoji.png"
                alt="emoji"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <button>Send</button>
            </form>
            <div className="flex gap-4 flex-wrap items-center mt-4">
              <div className="flex gap-2">
                <Image
                  src="/addimage.png"
                  alt="image"
                  width={16}
                  height={16}
                  className="cursor-pointer h-6 w-6"
                />
                Photo
              </div>
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
