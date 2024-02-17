import React from "react";
import { Pen, Trash, HelpCircle, LogOut } from "lucide-react";
import { auth, signOut } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";
const page = async () => {
  const { user } = await auth();

  return (
    <>
      <div className="relative w-full flex justify-center">
        <img
          className=" w-28 h-28 rounded-full object-cover absolute bottom-[-55px]"
          src={user?.image}
          alt="avatar"
        />
      </div>

      <div className="pt-16 px-4 pb-44 flex flex-col gap-12">
        <div>
          <h3 className=" text-center text-2xl font-medium">{user?.name}</h3>
          <p className=" text-center text-[#707070] text-lg mt-3">
            {/* 22 F | TX, USA */}
          </p>
          <p className=" text-center text-[#707070] text-lg mt-3">
            {/* jjones@outlook.com | +1 (323) 234 3423 */}
            {`${user?.email} `}
          </p>
        </div>

        <div className=" flex flex-col gap-4">
          <a href="/profile/edit">
            <button
              style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)" }}
              className="w-full flex items-center gap-5 bg-white p-5 rounded-2xl"
            >
              <Pen size={30} />
              <p>Edit profile</p>
            </button>
          </a>

          <button
            style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)" }}
            className="w-full flex items-center gap-5 bg-white p-5 rounded-2xl"
          >
            <HelpCircle size={30} />
            <p>Help</p>
          </button>

         <LogoutButton/>

          <button
            style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)" }}
            className="w-full flex items-center gap-5 bg-white p-5 rounded-2xl"
          >
            <Trash color="red" size={30} />
            <p className=" text-red-500">Delete</p>
          </button>
        </div>

        <p className=" font-light text-base text-center">
          Made with 💖 by StudioOne
        </p>
      </div>
    </>
  );
};

export default page;
