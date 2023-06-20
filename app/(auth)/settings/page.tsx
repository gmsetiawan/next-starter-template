import { SettingForm } from "@/components/SettingForm";
import SettingNav from "@/components/SettingNav";
import { authOptions, getAuthSession } from "@/lib/auth";
import { redirect, usePathname } from "next/navigation";
import React from "react";

const SettingsPage = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect(authOptions?.pages?.signIn || "/");
  }

  return (
    <div className="max-w-7xl mx-auto p-4 py-4 lg:p-0">
      <h1 className="text-xl font-semibold mb-4">Settings</h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <SettingNav />
        </div>
        <div className="col-span-3">
          <SettingForm
            user={{
              id: session.user.id,
              username: session.user.username || "",
              bio: session.user.bio || "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
