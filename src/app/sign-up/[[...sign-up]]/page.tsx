import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="h-[93vh] flex justify-center items-center">
        <SignUp />
      </div>
    </>
  );
}
