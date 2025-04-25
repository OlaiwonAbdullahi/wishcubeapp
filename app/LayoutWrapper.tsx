"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/nav";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isDashboard =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/gift") ||
    pathname.startsWith("/video") ||
    pathname.startsWith("/wallet");

  return (
    <>
      {!isDashboard && <Navbar />}
      <main>{children}</main>
    </>
  );
}
