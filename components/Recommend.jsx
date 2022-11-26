import Link from "next/link";
import React from "react";

export default function Recommend() {
  return (
    <div className="text-center pb-5">
      <small>See Personalized recommendations.</small>
      <br />
      <Link href="/login">
        <small className="btn auth_button">Sign In</small>
      </Link>
      <br />
      <small>
        New customer?<Link href={"/signup"}>Start Here.</Link>
      </small>
    </div>
  );
}
