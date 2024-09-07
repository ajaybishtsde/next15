import AddPost from "./components/AddPost";
import Feed from "./components/Feed";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";
import Stories from "./components/Stories";

export default function Homepage() {
  return (
    <>
      <div className="flex gap-6 pt-4">
        {/* left */}
        <div className="hidden xl:block w-[20%] ">
          <LeftMenu />
        </div>
        {/* center */}
        <div className="w-full lg:w-[70%] xl:w-[50%] ">
          <Stories />
          <AddPost />
          <Feed />
        </div>
        {/* right */}
        <div className="hidden lg:block w-[30%] ">
          <RightMenu />
        </div>
      </div>
    </>
  );
}
