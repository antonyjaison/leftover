"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)" }}
      className="w-full flex items-center gap-5 bg-white p-5 rounded-2xl"
    >
      <LogOut size={30} />
      <p>Logout</p>
    </button>
  );
}

export default LogoutButton;
