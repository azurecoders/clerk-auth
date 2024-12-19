import { UserProfile } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Profile = async () => {
  const { userId } = await auth();
  const isAuth = !!userId;

  const user = await currentUser();

  if (!isAuth) {
    redirect("/");
  }

  return (
    <div className="flex items-center justify-center flex-col mt-8">
      <h1 className="text-2xl my-5">{user?.username}</h1>
      <UserProfile />
    </div>
  );
};

export default Profile;
