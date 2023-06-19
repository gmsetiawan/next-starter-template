import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { StyleSwitcher } from "@/components/StyleSwitcher";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/configs/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />

            <div className="flex-1 mt-4">{children}</div>
            {modal}
          </ThemeProvider>
        </Providers>
        <Toaster />
        <StyleSwitcher />
      </body>
    </html>
  );
}
