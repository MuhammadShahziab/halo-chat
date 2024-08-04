"use client";
import { LogoutOutlined } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const TopBar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };
  return (
    <div className="topbar ">
      <Link href="/chats" className="flex items-center">
        <img
          className=" w-12 h-12 py-2 md:w-14 md:h-14 object-contain"
          src="/assets/logo.png"
        ></img>
        <p className="text-base sm:text-lg font-semibold text-[#189D0E]">
          Halo Chat
        </p>
      </Link>
      <div className="menu">
        <Link
          href="/chats"
          className={` ${
            pathname === "/chats" ? "font-semibold text-primary " : ""
          } text-lg  font-medium`}
        >
          Chats
        </Link>
        <Link
          href="/create"
          className={` ${
            pathname === "/create" ? "font-semibold text-primary " : ""
          } text-lg  font-medium`}
        >
          Create Chat
        </Link>
        <LogoutOutlined
          sx={{ fontSize: 27, cursor: "pointer", color: "#737373" }}
          onClick={handleLogout}
        ></LogoutOutlined>

        <Link href="/profile">
          <img
            src={`${user?.profileImage || "/assets/person.jpg "} `}
            className=" profileImage rounded-full"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
