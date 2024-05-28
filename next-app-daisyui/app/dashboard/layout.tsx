"use client";
import Link from "next/link";
import { ThemeList } from "../_components/theme-controller-dropdown";
import DashboardSidebar from "../_components/sidebar/dashboard-sidebar";
import "@/app/styles/Dashboard.css";
import DashboardNavbar from "../_components/navbar/dashboard-navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full grid grid-cols-[70px_auto]">
      <DashboardSidebar />

      <div id="dashboard-content" className="relative overflow-y-auto">
        <DashboardNavbar />

        <div className="overflow-y-auto max-h-screen mt-[67px] p-4">{children}</div>
      </div>
    </main>
  );
}
