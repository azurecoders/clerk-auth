import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center h-full justify-center">
      <SignIn afterSignOutUrl={"/"} />
    </div>
  );
}
