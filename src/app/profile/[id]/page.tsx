import Feed from "@/app/components/Feed";
import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";

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
