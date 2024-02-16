import SignInButton from "@/components/SignInButton";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
  return (
    <div
      className={`bg-[url('/images/signup.svg')] w-full h-[100vh] bg-cover overflow-hidden p-7 flex flex-col justify-end`}
    >
      <div>
        <img src="/svg/leftover.svg" alt="logo" />
        <p className="text-white text-xl font-normal">
          Say Goodbye to Food Waste
        </p>
      </div>

      <div>
        <SignInButton
          className="bg-[#224E38] w-full flex rounded-md p-3 items-center justify-center gap-4 mt-16 mb-7"
        >
          <img src="/svg/google.svg" alt="google" />
          <p className=" text-white text-sm font-normal">Sign up with google</p>
        </SignInButton>
        <Link className=" text-white" href="/login">
          Already have an account?
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
