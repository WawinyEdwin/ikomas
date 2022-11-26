import Link from "next/link";
import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div>
      <h1 className="text-center pt-1">
        <Link href="/">Ikomas</Link>
      </h1>
      <div>{children}</div>
      <hr />
      <div className="text-center pt-3">
        <small>&copy; 2023 | Privacy Policy.</small>
      </div>
    </div>
  );
}
