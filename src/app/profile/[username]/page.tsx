import Feed from "@/app/components/Feed";
import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";
import Prisma from "@/app/lib/client";
import { useUser } from "@clerk/nextjs";
import { auth, clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const { username } = params;
  // const { user: currentUser } = useUser();
  const { userId } = auth();
  const mongoId = (await clerkClient.users.getUser(userId as string))
    .privateMetadata;
  const user = await Prisma.user.findFirst({
    where: {
      username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });
  console.log("user>>>>>>>>>>>>>>>>>>>", user);
  if (!user) return notFound();

  let isBlocked;
  if (userId) {
    console.log("crssss", userId);
    const res = await Prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: mongoId.mongoId as string,
      },
    });
    if (res) {
      console.log("res>>>>>>>>>>>>", res);
      isBlocked = true;
    }
  } else isBlocked = false;
  if (isBlocked) return notFound();
  return (
    <>
      <div className="flex gap-6 pt-4">
        {/* left */}
        <div className="hidden xl:block w-[20%] ">
          <LeftMenu type="profile" />
        </div>
        {/* center */}
        <div className="w-full lg:w-[70%] xl:w-[50%] ">
          <div className="flex flex-col gap-6">
            <div className="bg-white p-4 flex flex-col gap-16 rounded-lg">
              <div className="relative h-72">
                <Image
                  src={user?.cover || "./noCover.png"}
                  alt="cover"
                  fill
                  className="w-full rounded-lg object-cover"
                />
                <Image
                  src={user?.avatar || "./noAvatar.png"}
                  alt="avatar"
                  width={112}
                  height={112}
                  className="h-28 w-28 rounded-full absolute right-0 left-0 m-auto -bottom-14 ring-1"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-xl font-bold">
                  {" "}
                  {user?.name && user.lastname
                    ? user.name + " " + user.lastname
                    : user.username}
                </span>
                <div className="flex gap-8">
                  <div className="flex flex-col gap-2 items-center text-gray-600">
                    <span className="font-bold">{user?._count.posts}</span>
                    <span>Posts</span>
                  </div>
                  <div className="flex flex-col gap-2 items-center text-gray-600">
                    <span className="font-bold">{user?._count.followers}</span>
                    <span>Followers</span>
                  </div>
                  <div className="flex flex-col gap-2 items-center text-gray-600">
                    <span className="font-bold">{user?._count.followings}</span>
                    <span>Following</span>
                  </div>
                </div>
              </div>
            </div>
            <Feed />
          </div>
        </div>
        {/* right */}
        <div className="hidden lg:block w-[30%] ">
          <RightMenu user={user} mongoId={mongoId.mongoId as string} />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
