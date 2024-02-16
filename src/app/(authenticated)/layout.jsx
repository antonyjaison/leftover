import Navbar from "@/components/navbar";
import UserAvatar from "@/components/user_avatar";
import { auth } from "@/lib/auth";
import LocationProvider from "@/providers/LocationProvider";
import { redirect } from "next/navigation";
import React from "react";

async function AuthenticatedLayout({ children }) {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  return (
    <div>
      <LocationProvider>
        <div className=" p-6">
          <UserAvatar />
        </div>
        {children}
        <Navbar />
      </LocationProvider>
    </div>
  );
}

export default AuthenticatedLayout;
