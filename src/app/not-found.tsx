"use client";
import Link from "next/link";

function NotFound() {
  return (
    <div>
      This page not found <br />
      <Link href="/">Back To Home Page </Link>
    </div>
  );
}
export default NotFound;
