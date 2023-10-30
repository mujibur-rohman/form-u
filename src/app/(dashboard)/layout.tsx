import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav>
        <Logo />
        <ThemeSwitcher />
        <UserButton afterSignOutUrl="/sign-in" />
      </nav>
      <main className="flex w-full flex-grow bg-red-300">{children}</main>
    </div>
  );
}

export default Layout;