import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

async function AuthenticatedLayout({ children }) {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  return children;
}

export default AuthenticatedLayout;
