"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Icons } from "./Icons";

export default function SettingNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      <Link
        href="/settings"
        className={cn(
          "flex items-center transition-colors hover:text-foreground/80",
          pathname === "/settings" ? "text-foreground" : "text-foreground/60"
        )}
      >
        <Icons.user className="mr-2 h-4 w-4" />
        Profile
      </Link>
      <Link
        href="/settings/help-center"
        className={cn(
          "flex items-center transition-colors hover:text-foreground/80",
          pathname === "/settings/help-center"
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        <Icons.help className="mr-2 h-4 w-4" />
        Help Center
      </Link>
    </nav>
  );
}
