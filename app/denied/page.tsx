import Link from "next/link";

export default function Denied() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl">Access Denied</h1>
        <p className="text-xl max-w-2xl text-center">
          You are logged in, but you do not have access this page.
        </p>
        <Link href="/" className="text-sm text-blue-500">
          Return to Home Page
        </Link>
      </div>
    </div>
  );
}
