"use client";

import { Logout, Person2Outlined } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ChatIcon from "@mui/icons-material/Chat";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const BottomBar = () => {
  const pathname = usePathname();

  const handleLogout = async () => {
    signOut({ callbackUrl: "/" });
  };

  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="fixed bottom-0 z-50 w-full flex justify-between items-center px-5 py-2 bg-white sm:hidden">
      <Link
        href="/chats"
        className={`${
          pathname === "/chats" ? "text-green-600" : ""
        } flex flex-col gap-y-1 items-center`}
      >
        <span
          className={`${
            pathname === "/chats" ? "bg-green-200 text-green-600" : ""
          }   flex justify-center items-center px-3 py-0.5 rounded-xl`}
        >
          <ChatIcon />
        </span>
        Chats
      </Link>
      <Link
        href="/create"
        className={`${
          pathname === "/create" ? "text-green-600" : ""
        } flex flex-col items-center gap-y-1`}
      >
        <span
          className={`${
            pathname === "/create" ? "bg-green-200 text-green-600" : ""
          }   flex justify-center items-center px-3 py-0.5 rounded-xl`}
        >
          <AddCircleOutlineIcon />
        </span>
        Contacts
      </Link>

      <div className="flex flex-col items-center">
        <span className="px-3 py-0.5 flex justify-center items-center rounded-xl">
          <Logout onClick={handleLogout} />
        </span>

        <p>Logout</p>
      </div>

      <Link
        href="/profile"
        className={`${
          pathname === "/contacts" ? "text-green-600" : ""
        } flex flex-col items-center gap-y-1`}
      >
        <span
          className={`${
            pathname === "/profile" ? "bg-green-200 text-green-600" : ""
          }   flex justify-center items-center px-3 py-0.5 rounded-xl`}
        >
          <Person2Outlined />
        </span>
        <p>Profile</p>
      </Link>
    </div>
  );
};

export default BottomBar;
