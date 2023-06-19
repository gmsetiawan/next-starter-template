import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "GitHub",
      href: "https://github.com/gmsetiawan",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
      ],
    },
    {
      title: "Community",
      items: [
        {
          title: "ReactJS",
          href: "/docs/nextjs",
          items: [],
        },
        {
          title: "NextJS",
          href: "/docs/nextjs",
          items: [],
        },
        {
          title: "TailwindCSS",
          href: "/docs/nextjs",
          items: [],
        },
      ],
    },
  ],
};
