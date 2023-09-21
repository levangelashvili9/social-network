"use client";
import { ThemeSwitcher } from "@/components/shared";
import { instance, logoutUser } from "@/services";
import { getCookie } from "cookies-next";
import { useState } from "react";

export default function Home() {
  return (
    <div>
      {getCookie("is_user_logged_in") === "true" ? (
        <div>
          <h1>U are in!</h1>
          <button onClick={logoutUser}>logout</button>
        </div>
      ) : (
        <h1>protected</h1>
      )}
      <ThemeSwitcher />
    </div>
  );
}
