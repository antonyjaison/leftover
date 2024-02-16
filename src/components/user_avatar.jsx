import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Location from "./location";
import { auth } from "@/lib/auth";
import Link from "next/link";

const UserAvatar = async () => {
  const { user } = await auth();

  return (
    <div className="flex justify-between items-center">
      <Link href="/profile">
        <Avatar>
          <AvatarImage src={user?.image} />
          <AvatarFallback>
            {user?.name?.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </Link>
      <Location />
      <div></div>
    </div>
  );
};

export default UserAvatar;
