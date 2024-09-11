import Feed from "@/app/components/Feed";
import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
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
                  src={
                    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww"
                  }
                  alt="cover"
                  fill
                  className="w-full rounded-lg object-cover"
                />
                <Image
                  src={
                    "https://plus.unsplash.com/premium_photo-1663957821802-4969fe6a0347?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww"
                  }
                  alt="cover"
                  width={112}
                  height={112}
                  className="h-28 w-28 rounded-full absolute right-0 left-0 m-auto -bottom-14 ring-1"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-xl font-bold">Ajay Bisht</span>
                <div className="flex gap-8">
                  <div className="flex flex-col gap-2 items-center text-gray-600">
                    <span className="font-bold">150</span>
                    <span>Posts</span>
                  </div>
                  <div className="flex flex-col gap-2 items-center text-gray-600">
                    <span className="font-bold">1.5k</span>
                    <span>Followers</span>
                  </div>
                  <div className="flex flex-col gap-2 items-center text-gray-600">
                    <span className="font-bold">1.1k</span>
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
          <RightMenu userId="ajay" />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
