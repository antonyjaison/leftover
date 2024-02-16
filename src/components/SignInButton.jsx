"use client";

import { signIn } from "next-auth/react";

function SignInButton({ className, children }) {
  return (
    <button
      onClick={async () => {
        try {
          signIn("google", {
            redirect: true,
            redirectTo: "/",
          });
        } catch (e) {
          // TODO Sonner toast
          console.error(e.message);
        }
      }}
      className={className}
    >
      {children}
    </button>
  );
}

export default SignInButton;
