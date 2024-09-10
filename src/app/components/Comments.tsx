import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <>
      {/* comments */}
      <div className="flex gap-4 items-center">
        <Image
          src={
            "https://images.unsplash.com/photo-1725695788066-34e372183231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="user"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex justify-between items-center w-full bg-slate-50 rounded-xl">
          <input
            type="text"
            name=""
            id=""
            className=" rounded-lg p-2 outline-none w-full bg-slate-50"
            placeholder="Write a comment..."
          />
          <Image
            src={"/emoji.png"}
            alt="emoji"
            width={12}
            height={12}
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      </div>
      {/* other comments */}
      <div className="flex gap-4 items-start justify-evenly mt-3 p-2">
        <Image
          src={
            "https://images.unsplash.com/photo-1725695788066-34e372183231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="user"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />

        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            {/* name */}
            <span>Uzumaki Naruto</span>
            {/* comment */}
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              delectus vel culpa incidunt ad saepe dolorum accusamus similique
              impedit.
            </p>
            {/* interact */}
            <div className="flex gap-6 items-center rounded-2xl">
              <Image
                src={"/like.png"}
                alt="like"
                width={12}
                height={12}
                className="cursor-pointer h-3 w-3"
              />
              <span className="text-gray-400">|</span>
              <span className="text-gray-400 text-xs">
                123 <span className="hidden md:inline">Likes</span>
              </span>
              <span className="cursor-pointer text-gray-400 text-xs">
                Reply
              </span>
            </div>
          </div>
          <Image
            src={"/more.png"}
            alt="more"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Comments;
