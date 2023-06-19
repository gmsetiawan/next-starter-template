import { SettingForm } from "@/components/SettingForm";
import { authOptions, getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const SettingsPage = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect(authOptions?.pages?.signIn || "/");
  }

  return (
    <div className="max-w-7xl mx-auto p-4 py-4 lg:p-0">
      <h1 className="text-xl font-semibold">Settings</h1>

      <div className="grid gap-10">
        <SettingForm
          user={{
            id: session.user.id,
            username: session.user.username || "",
          }}
        />
      </div>
    </div>
  );
};

export default SettingsPage;
