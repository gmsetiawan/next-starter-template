import { SettingForm } from "@/components/SettingForm";
import SettingNav from "@/components/SettingNav";
import { authOptions, getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { redirect, usePathname } from "next/navigation";
import React from "react";

const SettingsPage = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect(authOptions?.pages?.signIn || "/");
  }

  const user = await prisma.user.findFirst({
    where: {
      id: session.user.id as string,
    },
  });

  return (
    <>
      <div className="max-w-7xl mx-auto p-4 py-4 lg:p-0">
        <h1 className="text-xl font-semibold mb-4">Settings</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <SettingNav />
          </div>
          <div className="col-span-3">
            <SettingForm
              user={{
                id: user?.id || "",
                username: user?.username || "",
                bio: user?.bio || "",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
