import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const DocumentationPage = async () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1>🚀 Documentation</h1>
    </div>
  );
};

export default DocumentationPage;
