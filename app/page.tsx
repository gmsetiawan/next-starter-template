import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  const session = await getAuthSession();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1>🚀 Starter Template</h1>
    </div>
  );
}
