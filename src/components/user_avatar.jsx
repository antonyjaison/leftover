import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Location from "./location";

const UserAvatar = () => {
  return (
    <div className="flex justify-between items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Location/>
      <div></div>
    </div>
  );
};

export default UserAvatar;
