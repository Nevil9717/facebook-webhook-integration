"use client";
import LoginButton from "../components/LoginButton";

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-xl m-5">SignUp with Facebook Using Firebase</h1>
      <spam>{`Login Button -->   `}</spam>
      <LoginButton />
    </div>
  );
}
