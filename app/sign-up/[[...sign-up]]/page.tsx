import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center h-full justify-center">
      <SignUp afterSignOutUrl={"/"} />
    </div>
  );
}
