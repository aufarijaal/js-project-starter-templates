"use client";
import React from "react";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";

function DashboardSidebar() {
  const menu = [
    {
      text: "Home",
      icon: <Icon icon="heroicons-outline:home" width="20" />,
    },
    {
      text: "Database",
      icon: <Icon icon="heroicons-outline:circle-stack" width="20" />,
    },
    {
      text: "Inbox",
      icon: <Icon icon="heroicons-outline:inbox-arrow-down" width="20" />,
    },
    {
      text: "Packages",
      icon: <Icon icon="heroicons-outline:cube" width="20" />,
    },
    {
      text: "Disks",
      icon: <Icon icon="heroicons-outline:server-stack" width="20" />,
    },
    {
      text: "Expenses",
      icon: <Icon icon="heroicons-outline:banknotes" width="20" />,
    },
    {
      divider: true,
    },
    {
      text: "Jobs",
      icon: <Icon icon="heroicons-outline:briefcase" width="20" />,
    },
  ];

  return (
    <aside className="h-screen max-h-screen border-r border-solved-color flex flex-col">
      <div key="logo" className="w-full h-[67px] flex justify-center items-center border-b border-solved-color">
        <a href="/">
          <img width="28" src="/daisyui-logomark.svg" alt="brand logo" />
        </a>
      </div>

      <div className="sidebar-menu-list w-full flex flex-col gap-4 py-4">
        {menu.map((item, i) => (
          <div className="tooltip tooltip-right" data-tip={item.text} key={i}>
            <div className="sidebar-menu-item w-full flex justify-center">
              {!item.divider ? (
                <Link href="#" className="btn btn-square">
                  {/* {item.text} */}
                  {item.icon}
                </Link>
              ) : (
                <div className="h-px w-[100%-5px] px-4 bg-soborder-solved-color"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default DashboardSidebar;
