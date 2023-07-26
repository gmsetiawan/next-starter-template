import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h1>🚀 Dashboard</h1>
        <p>
          {session?.user.name} - Role : {session?.user.role}
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;
