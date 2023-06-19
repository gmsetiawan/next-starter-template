import { authOptions, getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const Profile = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect(authOptions?.pages?.signIn || "/");
  }

  return (
    <div className="max-w-7xl mx-auto p-4 py-4 lg:p-0">
      <h1 className="text-xl font-semibold">My Profile</h1>
      <div className="">
        <h1>{session?.user.name}</h1>
        <h1>{session?.user.email}</h1>
      </div>
    </div>
  );
};

export default Profile;
